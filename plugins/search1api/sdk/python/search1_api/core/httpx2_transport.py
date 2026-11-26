"""httpx2-backed transports -- the default implementations of the two transport protocols.

The sync and async adapters live together because they are peers differing only in ``await``, the
same reason :class:`RawClient` and :class:`AsyncRawClient` share a module. Everything
httpx2-specific is confined here, the default TLS trust included: swapping HTTP libraries means
writing one more module like this one, not touching anything else.

File ownership is written down here and nowhere else: every handle this module opens for a body --
a ``Path`` in a multipart part or a raw body, and the temp file an async part is spilled to -- is
registered on the send's ``ExitStack``, so it is closed when the send returns or raises,
deterministically and never by a finalizer. A handle the caller opened is passed through untouched
and never closed."""

from __future__ import annotations

import asyncio
import inspect
import io
import os
import ssl
from collections.abc import AsyncIterable, AsyncIterator, Callable, Iterable, Iterator, Mapping
from contextlib import ExitStack, suppress
from dataclasses import dataclass, field, replace
from pathlib import Path
from tempfile import mkstemp
from typing import Any

import certifi
import httpx2
from typing_extensions import TypeIs

from ._internal.urls import safe_url
from .bodies import (
    BinaryBody,
    FormBody,
    JsonBody,
    MultipartBody,
    MultipartFile,
    MultipartPart,
    MultipartText,
    RequestBody,
    TextBody,
)
from .exceptions import SdkConnectionError, SdkTimeoutError
from .files import AsyncBinaryContent, AsyncBinaryReader, BinaryReader
from .transport import (
    AsyncHttpClient,
    AsyncHttpResponse,
    HttpClient,
    HttpMethod,
    HttpRequest,
    HttpResponse,
)

_DEFAULT_TIMEOUT = 30.0

_CHUNK_SIZE = 65_536
"""httpx2's own multipart chunk size (``FileField.CHUNK_SIZE``), matched for the raw-body readers."""

_ASYNC_SOURCE_ON_SYNC_CLIENT = (
    "an async byte source cannot be sent by the sync client -- pass bytes, a Path, "
    "a binary reader or an Iterator[bytes], or use the async client"
)
"""What both sync legs raise for an async arm no type checker caught -- a raw body and a multipart
part give the same answer to the same mistake.

Only the message is shared. Each ``if`` stays written out at its own site, because it is what
narrows the union away from the async arms; behind a helper, neither leg could prove its return
type."""


def _is_async_reader(content: object) -> TypeIs[AsyncBinaryReader]:
    """Whether ``content`` is a reader whose ``read`` must be awaited.

    ``isinstance`` alone cannot tell the two reader protocols apart -- ``runtime_checkable``
    checks only that ``read`` exists -- so the async arm is decided by whether ``read`` is a
    coroutine function. ``TypeIs`` rather than ``TypeGuard``: the negative branch must narrow
    too, or the sync adapter could not prove its return type."""
    return isinstance(content, AsyncBinaryReader) and inspect.iscoroutinefunction(getattr(type(content), "read", None))


def _require_binary_reader(reader: BinaryReader) -> None:
    """Reject a text-mode handle before its first chunk reaches the wire.

    ``read(0)`` returns ``b""`` for a binary handle and ``""`` for a text one, without consuming
    anything -- a one-sided check: only ``str`` raises (``RawIOBase`` may legally return ``None``).

    Raises:
        TypeError: If ``reader`` was opened in text mode."""
    if isinstance(reader.read(0), str):
        raise TypeError("a text-mode file cannot carry binary content -- open it in binary mode ('rb')")


def _reports_its_own_length(reader: BinaryReader) -> bool:
    """Whether the library's length peek would describe what ``read`` will yield.

    The multipart encoder peeks with ``fstat(fileno())``, else a seek to the end -- both of which
    measure the stream's own extent (``FileField.get_length``). That is the body only when the
    reader does not transform what it reads: a buffered reader straight over a file, or an
    in-memory buffer. A decompressing reader answers with its *compressed* size, and wrapping one
    changes nothing, because the raw layer is still the transformer. The raw-body peek seeks
    instead, which would size a transforming reader only by decompressing all of it.

    ``BufferedRandom`` belongs here beside ``BufferedReader``: it is what ``os.fdopen(fd, "w+b")``
    returns, so :func:`_spilled`'s drained part stays measured.

    A positive list, so a reader this does not recognise is chunked rather than mis-measured."""
    if isinstance(reader, io.BytesIO):
        return True
    return isinstance(reader, (io.BufferedReader, io.BufferedRandom)) and isinstance(
        getattr(reader, "raw", None), io.FileIO
    )


def _is_at_start(reader: BinaryReader) -> bool:
    """Whether nothing has been read yet, so the stream's extent is also what remains.

    The raw-body peek has measured the whole extent in one release and the remainder in the next, so
    a handle already positioned mid-file stays chunked whichever answer the library gives (retiring
    this guard is ADR-0067's deferred follow-up). ``tell`` is not part of the protocol and raises on
    a stream that is fd-backed but not seekable; either is the same answer as *cannot prove it*."""
    tell = getattr(reader, "tell", None)
    if tell is None:
        return False
    try:
        return bool(tell() == 0)
    except OSError:
        return False


def _sync_content(content: AsyncBinaryContent, stack: ExitStack) -> bytes | BinaryReader | Iterable[bytes]:
    """Adapt a raw-body descriptor for the sync client, opening what needs opening onto ``stack``.

    Takes the full async union because that is ``BinaryBody.content``'s type -- the *static* gate
    is the emitted endpoint signature, which offers the sync client only the sync arms. The
    rejection below is the runtime backstop for a caller no checker saw, replacing the opaque
    stream-type error the underlying library would raise mid-send.

    A reader is handed on **only when the SDK can prove its size**, whatever the library's peek would
    answer: :func:`_reports_its_own_length` and :func:`_is_at_start` are the two halves of
    *provable*, and everything else is chunked. That keeps the framing the SDK's decision rather than
    the peek's, whose answer has changed between releases (ADR-0067). Chunking is also what a reader
    carrying nothing but ``read`` needs, since the library's ``content=`` gate is
    ``isinstance(..., Iterable)`` and would refuse it outright.

    Raises:
        TypeError: If ``content`` is an async arm, or a reader opened in text mode."""

    def chunks(reader: BinaryReader) -> Iterator[bytes]:
        while chunk := reader.read(_CHUNK_SIZE):
            yield chunk

    if isinstance(content, (bytes, bytearray)):
        return bytes(content)
    if isinstance(content, Path):
        return stack.enter_context(content.open("rb"))
    if _is_async_reader(content) or isinstance(content, AsyncIterable):
        raise TypeError(_ASYNC_SOURCE_ON_SYNC_CLIENT)
    if isinstance(content, BinaryReader):
        _require_binary_reader(content)
        if _reports_its_own_length(content) and _is_at_start(content):
            return content
        return chunks(content)
    return content


async def _awaited_chunks(reader: AsyncBinaryReader) -> AsyncIterator[bytes]:
    """Read an async reader to exhaustion in ``_CHUNK_SIZE`` windows.

    Module-level rather than nested because it has two callers, and they want the same windows for
    opposite reasons: a raw body streams them straight to the transport, and a multipart part writes
    them to a spill file first."""
    while chunk := await reader.read(_CHUNK_SIZE):
        yield chunk


async def _aiter(chunks: AsyncIterable[bytes]) -> AsyncIterator[bytes]:
    """Iterate an async iterable, so a caller's own chunk sizes reach :func:`_spilled` unchanged.

    Only :func:`_drained` needs this: an ``AsyncIterable`` is not an ``AsyncIterator``, and
    ``_spilled`` takes the narrower type so both of its callers hand it the same shape."""
    async for chunk in chunks:
        yield chunk


def _async_content(content: AsyncBinaryContent, stack: ExitStack) -> bytes | AsyncIterable[bytes]:
    """Adapt a raw-body descriptor to the async byte stream the async client demands.

    Sync arms read through a worker thread so a large upload from a slow disk does not park the
    event loop; the two async arms are consumed natively. A ``Path`` is opened here, eagerly, onto
    ``stack`` -- a momentary open on the loop, exactly as the multipart leg's ``_open`` does -- so
    a mid-send failure closes it on the stack's unwind rather than at a finalizer.

    The arm order is load-bearing: readers before iterables (a file handle iterates by *lines*),
    the async-reader guard before ``AsyncIterable`` (an async file is async-iterable by lines),
    and ``bytes`` before everything (it is an ``Iterable[int]``).

    Raises:
        TypeError: If ``content`` is a reader opened in text mode."""

    async def threaded_chunks(reader: BinaryReader) -> AsyncIterator[bytes]:
        # Every read in a worker thread: the non-blocking property of the async raw-body leg.
        while chunk := await asyncio.to_thread(reader.read, _CHUNK_SIZE):
            yield chunk

    async def iterable_chunks(chunks: Iterable[bytes]) -> AsyncIterator[bytes]:
        # Pulled on the loop: a caller's generator is the caller's own code; one that must not
        # block the loop is passed as an AsyncIterable instead.
        for chunk in chunks:
            yield chunk

    if isinstance(content, (bytes, bytearray)):
        return bytes(content)
    if isinstance(content, Path):
        return threaded_chunks(stack.enter_context(content.open("rb")))
    if _is_async_reader(content):
        return _awaited_chunks(content)
    if isinstance(content, BinaryReader):
        _require_binary_reader(content)
        return threaded_chunks(content)
    if isinstance(content, AsyncIterable):
        return content
    return iterable_chunks(content)


class _ChunkReader:
    """A read-only view over an iterable of chunks -- the shape the multipart encoder demands.

    The encoder can pull a part from ``bytes`` or from anything with a synchronous ``read``, and
    from nothing else, so an iterable reaches it through this and not at all otherwise.

    One of the encoder's two adapters, and the cheap one. This arm needs only a *shape* -- the
    chunks can be pulled synchronously, they simply do not arrive behind a ``read`` -- so a view
    suffices and nothing is copied or stored. Its sibling :func:`_spilled` answers the same demand
    for a source that must be **awaited**, which no view can bridge, and pays a temp file for it.
    The full statement of the httpx2 constraint both exist for is on ``_spilled``.

    It carries nothing but ``read``, deliberately. No ``seek``, so ``FileField.render_data`` skips
    the rewind it performs on a real handle; no ``fileno`` and no ``tell``, so the part reports no
    length and the whole body goes out chunked. An iterable is single-use, and a view that cannot
    rewind is what makes that visible rather than silently re-sending nothing.

    Owns nothing and closes nothing: the iterable is the caller's, exactly as a reader is."""

    __slots__ = ("_buffer", "_chunks")

    def __init__(self, chunks: Iterable[bytes]) -> None:
        self._chunks = iter(chunks)
        self._buffer = bytearray()

    def read(self, size: int = -1, /) -> bytes:
        """Return up to ``size`` bytes, or everything remaining when ``size`` is negative.

        Args:
            size: How many bytes to take; negative reads the iterable to exhaustion.

        Returns:
            The bytes taken, empty once the iterable is exhausted."""
        while size < 0 or len(self._buffer) < size:
            # ``next(..., None)`` rather than a falsy test: a generator may legally yield b"" in the
            # middle of a stream, and reading that as EOF would truncate the upload.
            chunk = next(self._chunks, None)
            if chunk is None:
                break
            self._buffer.extend(chunk)
        taken = bytes(self._buffer) if size < 0 else bytes(self._buffer[:size])
        del self._buffer[: len(taken)]
        return taken


class _UnsizedReader:
    """A caller's reader with its length claim withheld -- everything else passes through.

    Withholding ``fileno`` and ``tell`` makes the encoder's length peek answer ``None``, so the part
    claims no length and the body frames itself chunked. That peek measures the descriptor rather
    than the bytes ``read`` will produce, and the two diverge for a transforming reader; chunked is
    correct where a wrong length is not.

    ``seek`` is forwarded, unlike :class:`_ChunkReader`'s deliberate omission: ``render_data``
    rewinds a part before every render, and that rewind is what makes a caller's seekable handle
    re-sendable. A reader that cannot seek raises ``io.UnsupportedOperation``, which the encoder
    already catches -- the same answer a pipe gives.

    Owns nothing and closes nothing: the reader is the caller's."""

    __slots__ = ("_reader",)

    def __init__(self, reader: BinaryReader) -> None:
        self._reader = reader

    def read(self, size: int = -1, /) -> bytes:
        """Read from the wrapped reader, unchanged.

        Args:
            size: How many bytes to take; negative reads to exhaustion.

        Returns:
            Whatever the wrapped reader returned."""
        return self._reader.read(size)

    def seek(self, offset: int, whence: int = 0, /) -> int:
        """Reposition the wrapped reader, or refuse as a non-seekable stream does.

        Args:
            offset: Passed through unchanged.
            whence: Passed through unchanged.

        Returns:
            The wrapped reader's new absolute position.

        Raises:
            io.UnsupportedOperation: If the wrapped reader cannot seek."""
        seek = getattr(self._reader, "seek", None)
        if seek is None:
            raise io.UnsupportedOperation("underlying reader is not seekable")
        return int(seek(offset, whence))


def _open(content: AsyncBinaryContent, stack: ExitStack) -> bytes | BinaryReader:
    """Resolve a multipart part's content descriptor, opening what needs opening onto ``stack``.

    The one place the ownership rule is written down in code: a ``Path``'s handle is the SDK's,
    registered on the stack and closed when the send returns or raises; a caller's handle is
    returned untouched and never closed, and an iterable is wrapped, never consumed here.

    The arm order is ``_sync_content``'s, for the same reasons: ``bytes`` first (it is an
    ``Iterable[int]``), the async guard before the reader check (``runtime_checkable`` cannot tell
    the two reader protocols apart), readers before iterables (a file handle iterates by *lines*).
    On the async leg the async guard is unreachable -- :func:`_drained_parts` has already spilled
    those arms to a file, because the encoder cannot await.

    Raises:
        TypeError: If ``content`` is an async arm, or a reader opened in text mode."""
    if isinstance(content, (bytes, bytearray)):
        return bytes(content)
    if isinstance(content, Path):
        return stack.enter_context(content.open("rb"))
    if _is_async_reader(content) or isinstance(content, AsyncIterable):
        raise TypeError(_ASYNC_SOURCE_ON_SYNC_CLIENT)
    if isinstance(content, BinaryReader):
        _require_binary_reader(content)
        return content if _reports_its_own_length(content) else _UnsizedReader(content)
    return _ChunkReader(content)


async def _spilled(chunks: AsyncIterator[bytes], stack: ExitStack) -> BinaryReader:
    """Write an async source to a temp file the multipart encoder can read synchronously.

    **The limitation this exists for, at source (httpx2 2.13.1).** ``MultipartStream.__aiter__`` is
    ``for chunk in self.iter_chunks(): yield chunk`` -- an ``async`` generator delegating to a
    *synchronous* one -- and ``FileField.render_data`` pulls each part with a plain
    ``self.file.read(CHUNK_SIZE)``. There is no ``await`` anywhere in ``_multipart.py``. So the
    encoder asks for bytes with a function call, and an awaitable source can only answer with one,
    and the two cannot meet: **both** async arms are affected, ``AsyncBinaryReader`` and
    ``AsyncIterable[bytes]`` alike, and neither can be driven from inside the encode at any cost.
    Draining first is not an optimisation, it is the only way either arm reaches the wire.

    A temp file is where it drains *to* because the encoder's demand is a synchronous ``read``, and
    that is the cheapest thing that offers one without holding the payload: each chunk is written
    straight out and dropped, so **nothing accumulates** -- the alternative that kept the bytes in
    the process peaked at twice the payload, measured (ADR-0051).

    **What bounds the residency is the chunk size, and only one arm's is the SDK's.**
    :func:`_awaited_chunks` reads a reader in ``_CHUNK_SIZE`` windows, so that arm is bounded here
    by construction. :func:`_aiter` forwards an ``AsyncIterable``'s own chunks unchanged, because
    re-slicing a ``bytes`` the caller already built would add a copy rather than remove one -- so
    there the peak is the caller's largest ``yield``, whatever that is, and a caller who yields
    their whole payload at once has already made it resident before this is reached. Either way
    this function's own overhead is one chunk, never the total.

    **The sibling limitation, so the two are not confused.** A *sync* ``Iterator[bytes]`` in a part
    hits the same ``read``-only demand from the other direction -- it can be pulled synchronously
    but carries no ``read`` at all -- and is answered by :class:`_ChunkReader`, a view rather than a
    file, because there is nothing to await and so nothing to drain. Same encoder constraint, two
    adapters, and which one applies is decided by whether the source needs an ``await``.

    Owning the encoder would retire both adapters and the loop-blocking with them. It was designed
    and declined: ``core/`` is vendored per SDK, so a bug in it ships everywhere and is fixable only
    by re-vendoring, and RFC 7578 escaping is the refusal that stops a CR/LF in a filename splicing
    a header into the body. If httpx2 ever grows an ``__aiter__`` that awaits, consume it -- do not
    write one (ADR-0051, ADR-0024).

    Why not the two other things that offer a synchronous ``read``. Accumulating into ``bytes`` is
    the defect this replaced -- it peaked at twice the source, once for the chunk list and once for
    the join. A ``SpooledTemporaryFile``'s ``fileno()`` forces a rollover to disk (measured), so it
    would reach disk for a ten-byte part *and* answer the encoder's length probe only by doing so;
    a plain temp file is smaller and needs no threshold to tune. Being a real file is also what
    keeps the part **sized**: the encoder reaches ``fstat`` through it, so this arm still contributes
    a ``Content-Length`` exactly as the resident ``bytes`` did, and stays re-sendable because it is
    seekable.

    A caller whose async source is a local file should hand over the ``Path`` instead: this arm
    then costs two reads and a write to move bytes that were already on disk in the right shape.
    Said in ``files.py``'s module docstring, where a caller reads it.

    Built from ``mkstemp`` rather than ``TemporaryFile`` so the object handed on is the same on
    every platform. ``TemporaryFile`` is an alias for ``NamedTemporaryFile`` wherever an open file
    cannot be unlinked -- Windows -- and that returns a wrapper proxying ``read`` through
    ``__getattr__``. A ``runtime_checkable`` protocol tests the *class*, so the wrapper does not
    satisfy :class:`BinaryReader`, and the part would fall through to the chunk-reader arm and go
    out chunked. Normalised here rather than branched on later.

    **Unlinked immediately where the platform allows it.** A POSIX file survives its own directory
    entry as long as a descriptor is open, so removing the name now leaves the content reachable
    through the handle and reclaimed by the kernel when the handle closes -- *including* if the
    process is killed, which is the one exit an ``ExitStack`` cannot unwind. Windows refuses to
    unlink an open file, so there the removal is deferred onto the stack instead. Probed rather than
    branched on ``os.name``: the question is what this filesystem permits, and the answer decides
    only *when* the name goes away.

    Args:
        chunks: The async source, normalised to an iterator of byte windows.
        stack: The send's exit stack, which closes the file -- and deletes it, where it could not be
            deleted up front -- when the send returns or raises.

    Returns:
        The file, positioned at 0 and ready for the encoder's own reads."""
    descriptor, path = mkstemp()
    # Registration order is the whole of the cleanup contract, and it reads backwards: an
    # ``ExitStack`` unwinds last-registered-first, so the removal goes on *before* the handle in
    # order to run *after* it. ``missing_ok`` is what lets the same callback stand whether or not
    # the immediate unlink below already won.
    stack.callback(Path(path).unlink, missing_ok=True)
    spill = stack.enter_context(os.fdopen(descriptor, "w+b"))
    with suppress(OSError):
        os.unlink(path)
    async for chunk in chunks:
        spill.write(chunk)
    spill.seek(0)
    return spill


async def _drained(part: MultipartPart, stack: ExitStack) -> MultipartPart:
    """Spill one part's content to a temp file if it is an async source, else hand it back unchanged.

    Args:
        part: The part to resolve.
        stack: The send's exit stack, owning any file opened for this part.

    Returns:
        The part, or a copy of it reading from the file its source was drained into."""
    if not isinstance(part, MultipartFile):
        return part
    if _is_async_reader(part.content):
        return replace(part, content=await _spilled(_awaited_chunks(part.content), stack))
    if isinstance(part.content, AsyncIterable):
        return replace(part, content=await _spilled(_aiter(part.content), stack))
    return part


async def _drained_parts(body: RequestBody | None, stack: ExitStack) -> RequestBody | None:
    """Resolve any async part content before the multipart body is encoded.

    The encoder pulls every part from a synchronous chunk generator in both flavours, so an
    awaitable source cannot be driven from inside it. Draining it here is what makes the arm work;
    :func:`_spilled` is what keeps it bounded. The loop stays free during the drain -- the source is
    awaited natively -- and is then occupied by the encode itself, which is httpx2's synchronous
    generator and the one cost this leg still pays.

    Runs **inside** the send's ``ExitStack``, necessarily: it opens a file per async part, and those
    must unwind with everything else the send opened.

    Returns the body **unchanged** when nothing was drained, which is every multipart request whose
    parts are all sync arms.

    Args:
        body: The request's body, of any shape.
        stack: The send's exit stack.

    Returns:
        The body, or a multipart body whose async parts now read from a file."""
    if not isinstance(body, MultipartBody):
        return body
    parts = [await _drained(part, stack) for part in body.parts]
    # Identity, not equality: ``_drained`` hands an untouched part straight back, so ``is`` asks
    # exactly what this needs to know and cannot be answered by a part that merely compares equal.
    return body if all(new is old for new, old in zip(parts, body.parts, strict=True)) else MultipartBody(parts)


def _httpx2_part(part: MultipartPart, stack: ExitStack) -> tuple[str, Any]:
    """Render one part in httpx2's ``files=`` tuple spelling.

    Text parts go through the *file* spelling -- ``(None, content)``, a part with no filename --
    rather than through ``data=``, because httpx2 chooses the encoding on the **truthiness** of
    ``files``: an operation declaring ``multipart/form-data`` with no binary part would otherwise
    be sent as ``application/x-www-form-urlencoded``. The rendered bytes are identical either way,
    repeated keys and name escaping included, so the invariant costs nothing. A text part's bytes
    pass through the encoder as given: it frames them and encodes nothing."""
    match part:
        case MultipartText(name, content, None):
            return (name, (None, content))
        case MultipartText(name, content, media_type):
            return (name, (None, content, media_type))
        case MultipartFile(name, content, filename, media_type):
            return (name, (filename, _open(content, stack), media_type))


def _body_kwargs(
    body: RequestBody | None,
    stack: ExitStack,
    *,
    binary_content: Callable[[AsyncBinaryContent, ExitStack], object],
) -> dict[str, Any]:
    """Map the request's body onto the httpx2 keyword that carries it.

    This ``match`` is the only place the transport interprets the body union, and it is exhaustive by
    construction: adding a body shape without handling it here is a type error.

    Nothing here spells a header. A body's label -- its media type, and a raw body's
    ``Content-Disposition`` -- is already among ``request.headers``, folded there when the request was
    built (``bodies.content_headers``), so this function moves bytes and nothing else. The one label
    a transport still writes is multipart's, whose boundary exists only once httpx2 has minted it.

    ``binary_content`` is the one flavour-differing arm, passed as data with no default so each
    transport must name its own adapter -- ``_sync_content`` or ``_async_content``. One shared
    match rather than two sibling copies: this module is hand-written, where five duplicated arms
    to differ in one is drift risk rather than generator output.

    Args:
        body: The body being mapped -- the request's own, or the one :func:`_drained_parts`
            resolved from it.
        stack: The send's exit stack, onto which any handle opened for this body is registered.
        binary_content: The flavour's raw-body adapter.

    Returns:
        The httpx2 keyword argument carrying this body; empty when there is none."""
    match body:
        case None:
            return {}
        case JsonBody(content, _) | FormBody(content) | TextBody(content, _, _):
            return {"content": content}
        case MultipartBody(parts):
            return {"files": [_httpx2_part(part, stack) for part in parts]}
        case BinaryBody(content, _, _):
            return {"content": binary_content(content, stack)}


def _timeout_kwargs(request: HttpRequest) -> dict[str, Any]:
    """Map a per-request timeout onto httpx2's keyword, or contribute nothing.

    Omitting is deliberate rather than passing ``timeout=None``: to httpx2 that means *no timeout at
    all*, not *use the client's own*, so an absent override must not reach the call.

    Args:
        request: The request whose ``timeout`` is being mapped.

    Returns:
        ``{"timeout": ...}`` when the request set one, otherwise an empty mapping."""
    return {} if request.timeout is None else {"timeout": httpx2.Timeout(request.timeout)}


def _default_ssl_context() -> ssl.SSLContext:
    """The trust a transport gets when ``verify`` is left at ``True``.

    ``SSL_CERT_FILE``, else ``SSL_CERT_DIR``, else certifi's bundle -- the order the SDK shipped with
    before httpx2, which ends the same chain with ``truststore`` instead (ADR-0067). A plain
    ``ssl.SSLContext`` also keeps anyio's TLS wrap on the event loop rather than a worker thread.

    Returns:
        A fresh verifying context, one per transport."""
    if cafile := os.environ.get("SSL_CERT_FILE"):
        return ssl.create_default_context(cafile=cafile)
    if capath := os.environ.get("SSL_CERT_DIR"):
        return ssl.create_default_context(capath=capath)
    return ssl.create_default_context(cafile=certifi.where())


@dataclass(frozen=True, slots=True)
class _Httpx2Response:
    """A thin veneer meeting :class:`HttpResponse` over the library's own response.

    httpx2 lowercases header names on iteration, so ``headers`` meets the protocols' casing
    obligation by construction; ``read`` is the library's own, which both buffers the body and
    releases the connection -- the exact obligation the protocol states. Every read of the body
    translates the library's failures into the family's: ``httpx2.TimeoutException`` into
    :class:`~.exceptions.SdkTimeoutError`, carrying ``timeout`` -- the window the request ran under,
    its own or the client's -- and the rest of ``httpx2.TransportError`` together with
    ``DecodingError`` into :class:`~.exceptions.SdkConnectionError`. ``DecodingError`` sits under
    ``RequestError`` rather than ``TransportError`` in httpx2's tree, is raised for a content-encoding
    the library could not undo, and can only surface once the body is being read, which is why
    ``send`` need not name it. A read timeout bounds each wait for the next chunk, never the whole
    body, so its message says the read stalled rather than that nothing arrived. Each names the call as
    every result does, from the request's own ``method`` and ``url``, the URL cut by ``safe_url``."""

    _response: httpx2.Response
    method: HttpMethod
    # The request's spelling, never ``self._response.url``: httpx2 lowercases the host and drops a default
    # port, and the call a payload names must be the call the result names. Out of the generated repr,
    # which would otherwise print a query string a credential can sit in (ADR-0017).
    url: str = field(repr=False)
    timeout: float

    @property
    def status_code(self) -> int:
        return self._response.status_code

    @property
    def headers(self) -> Mapping[str, str]:
        return dict(self._response.headers)

    def iter_bytes(self, chunk_size: int | None) -> Iterator[bytes]:
        try:
            yield from self._response.iter_bytes(chunk_size)
        except httpx2.TimeoutException as e:
            raise SdkTimeoutError(
                f"{self.method} {safe_url(self.url)} stalled for {self.timeout:g} s reading the response body",
                method=self.method,
                url=safe_url(self.url),
                timeout=self.timeout,
            ) from e
        except (httpx2.TransportError, httpx2.DecodingError) as e:
            raise SdkConnectionError(
                f"{self.method} {safe_url(self.url)} could not read the response body: {e}",
                method=self.method,
                url=safe_url(self.url),
            ) from e

    def read(self) -> bytes:
        try:
            return self._response.read()
        except httpx2.TimeoutException as e:
            raise SdkTimeoutError(
                f"{self.method} {safe_url(self.url)} stalled for {self.timeout:g} s reading the response body",
                method=self.method,
                url=safe_url(self.url),
                timeout=self.timeout,
            ) from e
        except (httpx2.TransportError, httpx2.DecodingError) as e:
            raise SdkConnectionError(
                f"{self.method} {safe_url(self.url)} could not read the response body: {e}",
                method=self.method,
                url=safe_url(self.url),
            ) from e

    def close(self) -> None:
        self._response.close()


@dataclass(frozen=True, slots=True)
class _AsyncHttpx2Response:
    """The awaited twin of :class:`_Httpx2Response`, meeting :class:`AsyncHttpResponse`."""

    _response: httpx2.Response
    method: HttpMethod
    # The request's spelling, out of the repr -- see :class:`_Httpx2Response`.
    url: str = field(repr=False)
    timeout: float

    @property
    def status_code(self) -> int:
        return self._response.status_code

    @property
    def headers(self) -> Mapping[str, str]:
        return dict(self._response.headers)

    async def aiter_bytes(self, chunk_size: int | None) -> AsyncIterator[bytes]:
        try:
            async for chunk in self._response.aiter_bytes(chunk_size):
                yield chunk
        except httpx2.TimeoutException as e:
            raise SdkTimeoutError(
                f"{self.method} {safe_url(self.url)} stalled for {self.timeout:g} s reading the response body",
                method=self.method,
                url=safe_url(self.url),
                timeout=self.timeout,
            ) from e
        except (httpx2.TransportError, httpx2.DecodingError) as e:
            raise SdkConnectionError(
                f"{self.method} {safe_url(self.url)} could not read the response body: {e}",
                method=self.method,
                url=safe_url(self.url),
            ) from e

    async def aread(self) -> bytes:
        try:
            return await self._response.aread()
        except httpx2.TimeoutException as e:
            raise SdkTimeoutError(
                f"{self.method} {safe_url(self.url)} stalled for {self.timeout:g} s reading the response body",
                method=self.method,
                url=safe_url(self.url),
                timeout=self.timeout,
            ) from e
        except (httpx2.TransportError, httpx2.DecodingError) as e:
            raise SdkConnectionError(
                f"{self.method} {safe_url(self.url)} could not read the response body: {e}",
                method=self.method,
                url=safe_url(self.url),
            ) from e

    async def aclose(self) -> None:
        await self._response.aclose()


class Httpx2Client(HttpClient):
    """Sync transport backed by httpx2.

    Uses connection pooling via a single ``httpx2.Client``, and returns once the response head
    has arrived; the body is read by whoever the raw client hands it to.

    Requests honour the standard proxy environment variables -- ``HTTP_PROXY`` / ``HTTPS_PROXY`` /
    ``ALL_PROXY`` / ``NO_PROXY``, consulted only when ``proxy_url`` is unset. That is the underlying
    library's default rather than a decision made here, and it is stated because it is request
    behaviour the environment can change; a caller needing it off supplies a transport of their own.

    TLS trust *is* decided here: ``verify=True`` gets :func:`_default_ssl_context`, never httpx2's
    own ``truststore`` default (ADR-0067). ``verify`` also takes an ``ssl.SSLContext``, used exactly
    as given: a private CA bundle or a client certificate is configured by building one
    (``ssl.create_default_context(cafile=...)``). The one leg no context reaches is the TLS hop *to*
    an ``https://`` proxy, which the library verifies with its own default."""

    def __init__(
        self,
        *,
        timeout: float = _DEFAULT_TIMEOUT,
        proxy_url: str | None = None,
        verify: ssl.SSLContext | bool = True,
    ) -> None:
        self._client = httpx2.Client(
            proxy=proxy_url,
            timeout=httpx2.Timeout(timeout),
            verify=_default_ssl_context() if verify is True else verify,
        )
        self._timeout = timeout
        self._closed = False

    def send(self, request: HttpRequest) -> HttpResponse:
        # The stack owns every handle opened for this body, and closes once the head has arrived --
        # which is after the request body has been sent in full, so closing there is correct, not
        # early. An exception mid-send closes it on the unwind. The *response* body is pending; the
        # returned wrapper owns that connection until it is closed.
        #
        # httpx2.TransportError is the line the protocol draws at this seam -- a refused, dropped,
        # timed-out or protocol-broken connection -- and its timeout subclasses are the family's one leaf,
        # carrying the window the request ran under: its own, else this client's. A PoolTimeout has its
        # own arm and wording, since it waited for a connection and so wrote no request. Each names the
        # call as every result does, the request's URL cut to the path. httpx2.DecodingError and
        # TooManyRedirects are things that go wrong *after* a response arrived: the first is the
        # response wrapper's to translate, the second unreachable, since follow_redirects is never set.
        # The same arms sit at both seams.
        timeout = self._timeout if request.timeout is None else request.timeout
        try:
            with ExitStack() as stack:
                httpx2_request = self._client.build_request(
                    method=request.method,
                    url=request.url,
                    headers=request.headers,
                    **_timeout_kwargs(request),
                    **_body_kwargs(request.body, stack, binary_content=_sync_content),
                )
                response = self._client.send(httpx2_request, stream=True)
        except httpx2.PoolTimeout as e:
            raise SdkTimeoutError(
                f"{request.method} {safe_url(request.url)} found no free connection in the pool within {timeout:g} s",
                method=request.method,
                url=safe_url(request.url),
                timeout=timeout,
            ) from e
        except httpx2.TimeoutException as e:
            raise SdkTimeoutError(
                f"{request.method} {safe_url(request.url)} received no response within {timeout:g} s",
                method=request.method,
                url=safe_url(request.url),
                timeout=timeout,
            ) from e
        except httpx2.TransportError as e:
            raise SdkConnectionError(
                f"{request.method} {safe_url(request.url)} could not be sent: {e}",
                method=request.method,
                url=safe_url(request.url),
            ) from e
        return _Httpx2Response(response, request.method, request.url, timeout)

    def close(self) -> None:
        if self._closed:
            return
        self._closed = True
        self._client.close()


class AsyncHttpx2Client(AsyncHttpClient):
    """Async transport backed by httpx2.

    Uses connection pooling via a single ``httpx2.AsyncClient``, and returns once the response
    head has arrived; the body is read by whoever the raw client hands it to.

    Requests honour the standard proxy environment variables -- ``HTTP_PROXY`` / ``HTTPS_PROXY`` /
    ``ALL_PROXY`` / ``NO_PROXY``, consulted only when ``proxy_url`` is unset. That is the underlying
    library's default rather than a decision made here, and it is stated because it is request
    behaviour the environment can change; a caller needing it off supplies a transport of their own.

    TLS trust *is* decided here: ``verify=True`` gets :func:`_default_ssl_context`, never httpx2's
    own ``truststore`` default (ADR-0067). ``verify`` also takes an ``ssl.SSLContext``, used exactly
    as given: a private CA bundle or a client certificate is configured by building one
    (``ssl.create_default_context(cafile=...)``). The one leg no context reaches is the TLS hop *to*
    an ``https://`` proxy, which the library verifies with its own default."""

    def __init__(
        self,
        *,
        timeout: float = _DEFAULT_TIMEOUT,
        proxy_url: str | None = None,
        verify: ssl.SSLContext | bool = True,
    ) -> None:
        self._client = httpx2.AsyncClient(
            proxy=proxy_url,
            timeout=httpx2.Timeout(timeout),
            verify=_default_ssl_context() if verify is True else verify,
        )
        self._timeout = timeout
        self._closed = False

    async def send(self, request: HttpRequest) -> AsyncHttpResponse:
        timeout = self._timeout if request.timeout is None else request.timeout
        try:
            with ExitStack() as stack:
                # Inside the stack, necessarily: the pre-pass opens a spill file per async part, and
                # those unwind with everything else this send opened.
                body = await _drained_parts(request.body, stack)
                httpx2_request = self._client.build_request(
                    method=request.method,
                    url=request.url,
                    headers=request.headers,
                    **_timeout_kwargs(request),
                    **_body_kwargs(body, stack, binary_content=_async_content),
                )
                response = await self._client.send(httpx2_request, stream=True)
        except httpx2.PoolTimeout as e:
            raise SdkTimeoutError(
                f"{request.method} {safe_url(request.url)} found no free connection in the pool within {timeout:g} s",
                method=request.method,
                url=safe_url(request.url),
                timeout=timeout,
            ) from e
        except httpx2.TimeoutException as e:
            raise SdkTimeoutError(
                f"{request.method} {safe_url(request.url)} received no response within {timeout:g} s",
                method=request.method,
                url=safe_url(request.url),
                timeout=timeout,
            ) from e
        except httpx2.TransportError as e:
            raise SdkConnectionError(
                f"{request.method} {safe_url(request.url)} could not be sent: {e}",
                method=request.method,
                url=safe_url(request.url),
            ) from e
        return _AsyncHttpx2Response(response, request.method, request.url, timeout)

    async def aclose(self) -> None:
        if self._closed:
            return
        self._closed = True
        await self._client.aclose()
