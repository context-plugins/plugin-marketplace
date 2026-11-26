"""The streamed download's payload: a response body not yet read, owning its connection.

``FileResponse`` and ``AsyncFileResponse`` are not frozen, and deliberately so: unlike the runtime's
inert values, they own a resource with a lifecycle. Every
consuming path -- ``read``, ``save_to``, a drained ``iter_bytes``, a ``with`` block, ``close`` --
releases the connection; abandoning a partial manual iteration is the one leak, reported by
``__del__`` (a ``ResourceWarning``, the io/socket idiom) and reaped by the client's own close.

A finalizer here only ever *reports*, never acts (ADR-0007): nothing is closed at GC time, which
is also why the consuming generator re-raises ``GeneratorExit`` without closing -- closing there
would run at collection time and silently suppress the warning that names the mistake."""

from __future__ import annotations

import asyncio
import os
import warnings
from collections.abc import AsyncIterator, Iterator, Mapping
from pathlib import Path

from typing_extensions import Self

from ._internal.content_disposition import content_disposition_filename, safe_filename
from ._internal.redaction import redact_url
from ._internal.urls import safe_url
from .transport import AsyncHttpResponse, HttpResponse

_CHUNK_SIZE = 65_536
"""The library's own multipart chunk size, matched so a download iterates as an upload reads."""


class FileResponse:
    """A response body that has not been read yet.

    Three ways to consume it, and all three close the connection::

        client.files.download(id).save_to("out.bin")      # streams to disk
        data = client.files.download(id).read()           # buffers, for a small file
        with client.files.download(id) as f:              # anything else
            for chunk in f.iter_bytes():
                ...

    Reading is what closes it, so only a *partially* consumed manual iteration outside a ``with``
    can leak. That case emits a ``ResourceWarning`` at finalization, the same way an unclosed file
    object does -- the mistake is made loud rather than quietly cleaned up (ADR-0007, amended).
    The client's own ``close()`` is the backstop: it disposes the pool, and any connection still
    held with it. Single-use: once closed, reading again raises rather than yielding nothing. One
    consumer per response: ``read()`` after a partially-driven ``iter_bytes()`` raises the
    underlying single-pass error. The per-call ``timeout`` applies to each read of a streamed
    body, so a stalled download raises ``SdkConnectionError`` rather than hanging.

    ``headers`` is the full response head -- ``ETag``, ``Last-Modified`` and friends cost nothing
    to expose since the head has already arrived; ``media_type``, ``content_length`` and
    ``filename`` are the three curated conveniences over it. ``filename`` is the server's own
    suggestion from ``Content-Disposition`` and is sanitised before it can name a path -- see
    :meth:`save_to`."""

    __slots__ = (
        "_closed",
        "_method",
        "_response",
        "_safe_url",
        "_url",
        "content_length",
        "filename",
        "headers",
        "media_type",
    )

    def __init__(self, response: HttpResponse) -> None:
        # Total by design: this runs between the head arriving and the raw client returning, so a
        # raise here would leak the connection. Malformed headers degrade to None, never raise.
        self._response = response
        self._closed = False
        # Captured here rather than read off the response in __del__, which can run at interpreter
        # shutdown where a property call into the transport may find its objects already torn down --
        # and a finalizer that raises reports nothing. Rendered through ``redact_url`` with its
        # defaults, unknown query values ``REDACTED``, because this string's only reader is the
        # abandonment warning, and a query-placed api key would otherwise reach stderr and the logs
        # with it.
        self._url = redact_url(response.url)
        # The call, as every result and exception names it: a transport returns the URL the request asked
        # for, and ``safe_url`` cuts that to the path, which is exactly the result's ``url``.
        self._method = response.method
        self._safe_url = safe_url(response.url)
        self.headers: Mapping[str, str] = response.headers
        self.media_type = self.headers.get("content-type")
        length = self.headers.get("content-length")
        self.content_length = int(length) if length is not None and length.isascii() and length.isdigit() else None
        self.filename = content_disposition_filename(self.headers.get("content-disposition"))

    def iter_bytes(self, chunk_size: int = _CHUNK_SIZE) -> Iterator[bytes]:
        """Iterate the body in chunks, closing when it is exhausted.

        The default is the underlying library's own 64 KiB: a 2 GiB download is 32 768 iterations
        at this size. An exception mid-iteration closes before propagating; only abandoning the
        iteration part-way leaves the connection held, which ``__del__`` reports.

        Args:
            chunk_size: How many bytes each chunk carries at most.

        Returns:
            The body's chunks, in order.

        Raises:
            ValueError: If ``chunk_size`` is not positive, or the response is already closed.
            SdkConnectionError: From the iteration, if the transport could not deliver the body, a read
                that timed out included. The library's exception is the cause."""
        # Checked here, not in the generator: a closed response must raise at the call, the way a
        # closed file does -- not at the first next().
        self._ensure_open()
        if chunk_size <= 0:
            raise ValueError(f"chunk_size must be a positive number of bytes -- got {chunk_size}")
        return self._consume(chunk_size)

    def _consume(self, chunk_size: int) -> Iterator[bytes]:
        try:
            yield from self._response.iter_bytes(chunk_size)
        except GeneratorExit:
            # Abandoned mid-iteration: deliberately left open. Closing here would run at GC time,
            # and a finalizer may report, never act (ADR-0007) -- __del__ warns, client.close()
            # reaps. The warning is the remedy's pointer, not the remedy.
            raise
        except BaseException:
            # A body the transport could not deliver arrives as the family's exception already naming the
            # call -- closed here with everything else, and passed as it is.
            self.close()
            raise
        self.close()

    def read(self) -> bytes:
        """Buffer the whole body and close. For a payload that fits in memory.

        Returns:
            The complete body.

        Raises:
            ValueError: If the response is already closed.
            SdkConnectionError: If the transport could not deliver the body -- its leaf
                ``SdkTimeoutError`` for a read that timed out. The library's exception is the cause."""
        self._ensure_open()
        try:
            return self._response.read()
        finally:
            self.close()

    def save_to(self, destination: str | Path) -> Path:
        """Stream the body to ``destination``, closing when done.

        A directory is a legal destination: the file is named by ``filename`` when the server sent
        one -- reduced to a safe basename first, since a ``Content-Disposition`` is
        attacker-controlled -- and ``ValueError`` is raised when it did not. Written to
        ``<name>.part`` and moved into place with ``os.replace``, which is atomic on both
        platforms, so an interrupted download never appears under the final name; the partial is
        unlinked on failure. A failure to open the partial -- a missing parent directory, or
        permissions -- propagates with the response still consumable, exactly as the no-filename
        precondition does.

        Args:
            destination: The file path to write, or a directory to write into under the
                server-suggested name.

        Returns:
            The path written.

        Raises:
            ValueError: If ``destination`` is a directory and the server sent no usable filename, or
                the response is already closed.
            SdkConnectionError: If the transport could not deliver the body; the partial file is
                unlinked first."""
        # First: a second save_to must raise before it can touch the filesystem -- without this, a
        # doomed call would create, truncate and unlink the .part before iter_bytes refuses.
        self._ensure_open()
        target = Path(destination)
        if target.is_dir():
            if self.filename is None:
                raise ValueError(
                    "the server sent no filename to save under -- pass a full file path instead of a directory"
                )
            target = target / safe_filename(self.filename)
        partial = target.with_name(target.name + ".part")
        out = partial.open("wb")  # an open failure, like the precondition above, leaves the response consumable
        try:
            with out:
                for chunk in self.iter_bytes():
                    out.write(chunk)
            os.replace(partial, target)  # inside the try: a failed replace must also clean up
        except BaseException:
            self.close()  # idempotent -- iter_bytes' own error path may have closed already
            partial.unlink(missing_ok=True)
            raise
        return target

    def close(self) -> None:
        """Release the connection. Idempotent, and every consuming path above calls it."""
        if self._closed:
            return
        self._closed = True
        self._response.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(self, *exc: object) -> None:
        self.close()

    def __del__(self) -> None:
        # getattr guard: __init__ may not have completed. Report only -- never act (ADR-0007).
        if not getattr(self, "_closed", True):
            warnings.warn(
                f"unclosed {type(self).__name__} for {self._url} -- use `with`, or call read() / save_to() / close()",
                ResourceWarning,
                stacklevel=2,
                source=self,
            )

    def __repr__(self) -> str:
        # Identify by media type and length only -- never the bytes, which may be enormous and
        # are not read yet anyway. Same rule as RawError and ApiError.
        return f"{type(self).__name__}(media_type={self.media_type!r}, content_length={self.content_length})"

    def _ensure_open(self) -> None:
        if self._closed:
            raise ValueError(
                f"this {type(self).__name__} is closed -- it is single-use: read(), save_to() and "
                "a drained iter_bytes() each consume and close it"
            )


class AsyncFileResponse:
    """The awaited twin of :class:`FileResponse` -- same lifecycle, ``a``-prefixed verbs.

    ``async with`` is the spelling to reach for: an abandoned instance defers finalization to
    ``loop.shutdown_asyncgens()``, where the ``ResourceWarning`` still fires but later and less
    usefully, and ``aclose`` must run on the loop that created the response."""

    __slots__ = (
        "_closed",
        "_method",
        "_response",
        "_safe_url",
        "_url",
        "content_length",
        "filename",
        "headers",
        "media_type",
    )

    def __init__(self, response: AsyncHttpResponse) -> None:
        # Total by design, exactly as the sync twin's: a raise here would leak the connection.
        self._response = response
        self._closed = False
        # Captured here rather than read off the response in __del__, which can run at interpreter
        # shutdown where a property call into the transport may find its objects already torn down --
        # and a finalizer that raises reports nothing. Rendered through ``redact_url`` with its
        # defaults, unknown query values ``REDACTED``, because this string's only reader is the
        # abandonment warning, and a query-placed api key would otherwise reach stderr and the logs
        # with it.
        self._url = redact_url(response.url)
        # The call, as every result and exception names it: a transport returns the URL the request asked
        # for, and ``safe_url`` cuts that to the path, which is exactly the result's ``url``.
        self._method = response.method
        self._safe_url = safe_url(response.url)
        self.headers: Mapping[str, str] = response.headers
        self.media_type = self.headers.get("content-type")
        length = self.headers.get("content-length")
        self.content_length = int(length) if length is not None and length.isascii() and length.isdigit() else None
        self.filename = content_disposition_filename(self.headers.get("content-disposition"))

    def aiter_bytes(self, chunk_size: int = _CHUNK_SIZE) -> AsyncIterator[bytes]:
        """Iterate the body in chunks, closing when it is exhausted; see the sync twin.

        Args:
            chunk_size: How many bytes each chunk carries at most.

        Returns:
            The body's chunks, in order.

        Raises:
            ValueError: If ``chunk_size`` is not positive, or the response is already closed.
            SdkConnectionError: From the iteration, if the transport could not deliver the body, a read
                that timed out included. The library's exception is the cause."""
        self._ensure_open()
        if chunk_size <= 0:
            raise ValueError(f"chunk_size must be a positive number of bytes -- got {chunk_size}")
        return self._consume(chunk_size)

    async def _consume(self, chunk_size: int) -> AsyncIterator[bytes]:
        try:
            async for chunk in self._response.aiter_bytes(chunk_size):
                yield chunk
        except GeneratorExit:
            # Abandoned mid-iteration: deliberately left open, as in the sync twin.
            raise
        except BaseException:
            await self.aclose()
            raise
        await self.aclose()

    async def aread(self) -> bytes:
        """Buffer the whole body and close. For a payload that fits in memory.

        Returns:
            The complete body.

        Raises:
            ValueError: If the response is already closed.
            SdkConnectionError: If the transport could not deliver the body -- its leaf
                ``SdkTimeoutError`` for a read that timed out. The library's exception is the cause."""
        self._ensure_open()
        try:
            return await self._response.aread()
        finally:
            await self.aclose()

    async def save_to(self, destination: str | Path) -> Path:
        """Stream the body to ``destination``, closing when done; see the sync twin.

        Every filesystem touch runs in a worker thread, so a slow disk does not park the loop.

        Args:
            destination: The file path to write, or a directory to write into under the
                server-suggested name.

        Returns:
            The path written.

        Raises:
            ValueError: If ``destination`` is a directory and the server sent no usable filename, or
                the response is already closed.
            SdkConnectionError: If the transport could not deliver the body; the partial file is
                unlinked first."""
        self._ensure_open()  # first, as in the sync twin: raise before touching the filesystem
        target = Path(destination)
        if await asyncio.to_thread(target.is_dir):
            if self.filename is None:
                raise ValueError(
                    "the server sent no filename to save under -- pass a full file path instead of a directory"
                )
            target = target / safe_filename(self.filename)
        partial = target.with_name(target.name + ".part")
        out = await asyncio.to_thread(partial.open, "wb")  # an open failure leaves the response consumable
        try:
            try:
                async for chunk in self.aiter_bytes():
                    await asyncio.to_thread(out.write, chunk)
            finally:
                await asyncio.to_thread(out.close)
            await asyncio.to_thread(os.replace, partial, target)
        except BaseException:
            await self.aclose()  # idempotent -- aiter_bytes' own error path may have closed already
            await asyncio.to_thread(partial.unlink, True)
            raise
        return target

    async def aclose(self) -> None:
        """Release the connection. Idempotent, and every consuming path above awaits it."""
        if self._closed:
            return
        self._closed = True
        await self._response.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(self, *exc: object) -> None:
        await self.aclose()

    def __del__(self) -> None:
        # getattr guard: __init__ may not have completed. Report only -- never act (ADR-0007).
        if not getattr(self, "_closed", True):
            warnings.warn(
                f"unclosed {type(self).__name__} for {self._url} -- use `async with`, or call "
                "aread() / save_to() / aclose()",
                ResourceWarning,
                stacklevel=2,
                source=self,
            )

    def __repr__(self) -> str:
        return f"{type(self).__name__}(media_type={self.media_type!r}, content_length={self.content_length})"

    def _ensure_open(self) -> None:
        if self._closed:
            raise ValueError(
                f"this {type(self).__name__} is closed -- it is single-use: aread(), save_to() and "
                "a drained aiter_bytes() each consume and close it"
            )
