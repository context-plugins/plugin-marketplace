"""What a caller may hand an endpoint as file input, and how a part describes itself.

A file never reaches the model layer. It is not validated by pydantic, not dumped through an
adapter, and not carried on ``SdkBaseModel`` -- which is why a file parameter names no declared
type in a subscript where every other parameter does: there is no adapter for it to name.

**One vocabulary, both destinations.** ``FileInput`` is what a raw request body and a multipart
part alike accept, and only the concurrency flavour tells it from ``AsyncFileInput``. Where a
destination cannot carry an arm natively it is adapted rather than refused, so nothing type-checks
here that does not reach the wire.

**Memory and ownership.** Every spelling below streams except ``bytes``, which the caller already
holds. A ``Path`` is opened by the transport on the send's ``ExitStack`` and read in 64 KiB chunks,
so the safest spelling is also the shortest one -- and the handle the transport opened is closed
when the send returns or raises, never later and never by a finalizer. A handle *you* open stays
yours: the SDK never closes a caller-supplied reader.

**Position, and single use.** A multipart part rewinds a seekable handle to 0 before reading it; a
raw body reads from wherever it sits. That is the underlying library's rule, and it is stated here
because it decides what happens to a handle you hand in mid-file. An iterable of chunks has no
position at all: it is consumed once, in either destination, and cannot be re-sent.

**The async multipart caveat, stated where it bites.** The shipped transport's HTTP library
encodes a multipart body from a synchronous chunk generator in both flavours
(``MultipartStream.__aiter__`` yields from ``iter_chunks``), so on the async client each 64 KiB
read of a *sync* arm is a blocking syscall on the loop thread. An *async* source cannot be pulled
from inside that generator at all, so one handed to a part is drained to a temp file first --
awaited natively, a chunk at a time, so it costs a write and not residency; the file lives on the
send's ``ExitStack`` and carries a real ``fileno``, which is what keeps the part sized and
re-sendable. **The chunk is 64 KiB for a reader, and your own for an iterable** -- an
``AsyncIterable``'s pieces are forwarded as you yield them, so a generator that yields its whole
payload in one ``bytes`` has already made it resident before the SDK sees it, where one that yields
windows never does. Nothing accumulates on top of that in either case. A raw binary body has
neither cost: every sync arm is adapted to an async stream reading through ``asyncio.to_thread``,
and the two async arms are consumed natively.

**If those bytes are a file on disk, hand over the ``Path`` and not an async handle.** This is the
one place in the file surface where the natural-looking spelling is the wrong one. A ``Path`` in a
multipart part is read once, straight to the socket. The same file behind an ``anyio`` handle is
read, written to the spill file, and read back -- two reads and a write to deliver bytes that were
already sitting on disk in the form the encoder wanted. The async arms are for content that has no
path: bytes arriving from another connection, a queue, a subprocess. Reach for them when there is
nothing to name, not when naming it is merely less convenient.

**And what the spill costs, since it is the one place the SDK writes to disk.** It is created by
``mkstemp`` -- mode 0600 on POSIX, the temp directory's own ACL on Windows -- and unlinked
immediately where the platform allows, so on POSIX it has no name for the whole of its life and is
reclaimed even if the process is killed. Three consequences a deployment may care about, none of
them hidden:

* the location is the standard one, so ``TMPDIR`` / ``TEMP`` redirects it -- and if that directory
  is a **tmpfs**, the bytes are back in RAM, bounded page cache rather than bounded memory;
* it needs room. A payload larger than the temp filesystem, or a read-only one with nowhere to
  write, raises ``OSError`` from the drain, where the same upload previously only risked memory;
* the payload is briefly at rest on disk. Unnamed and per-user, but on disk, which a policy that
  forbids that will care about.

The time cost is smaller than it reads: the read-back comes from the page cache rather than the
platter (measured at memory speed), and past a few hundred MiB the drain is *faster* than the
``bytes`` it replaced, because allocating and copying a payload that size costs more than streaming
it through a file. None of this applies to any other arm -- nothing else here writes to disk."""

from __future__ import annotations

from collections.abc import AsyncIterable, Iterator
from dataclasses import dataclass
from pathlib import Path
from typing import Generic, Protocol, TypeAlias, runtime_checkable

# ``TypeVar`` from here and not ``typing``: PEP 696 defaults reach ``typing`` at 3.13, and
# ``ContentT_co`` below needs one at the 3.10 floor.
from typing_extensions import TypeVar


@runtime_checkable
class BinaryReader(Protocol):
    """Anything with a binary ``read`` -- a file object, a ``SpooledTemporaryFile``, a ``GzipFile``.

    Structural rather than a list of concrete classes, which is what lets every custom reader work
    without being enumerated."""

    def read(self, size: int = -1, /) -> bytes: ...


@runtime_checkable
class AsyncBinaryReader(Protocol):
    """Anything with an awaitable binary ``read`` -- ``anyio.AsyncFile`` and kin.

    Note for the transport, stated once here: ``isinstance`` cannot tell this protocol from
    :class:`BinaryReader` -- ``runtime_checkable`` checks only that ``read`` exists -- so runtime
    dispatch goes through a ``TypeIs`` guard on ``iscoroutinefunction``, never a class pattern."""

    async def read(self, size: int = -1, /) -> bytes: ...


BinaryContent: TypeAlias = bytes | bytearray | Path | BinaryReader | Iterator[bytes]
"""Where an upload's bytes come from, on the sync client.

Deliberately no ``str`` arm: a bare string is unresolvably either a path or the content itself, and
the library this rides on reads it as the content. The iterator arm is the progress hook: a
generator that yields chunks may count them on the way past.

``Iterator`` rather than ``Iterable``, so that one file's content and a *list of files* are disjoint
types: a ``list[bytes]`` is only ever many files, and one file arriving in chunks says so by handing
over an iterator. That is what lets :func:`file_part`'s two overloads stand without overlapping, and
it costs a caller holding a chunk list one ``iter(...)`` -- refused statically, never silently
(ADR-0049)."""

AsyncBinaryContent: TypeAlias = BinaryContent | AsyncBinaryReader | AsyncIterable[bytes]
"""The same, plus the two arms only an async client can consume.

In a raw body every sync arm is adapted to an async stream that reads through ``asyncio.to_thread``,
so the leg streams *and* leaves the loop free, and the two async arms are consumed natively. In a
multipart part the two async arms are drained to a temp file first -- see the module docstring."""

ContentT_co = TypeVar("ContentT_co", bound=AsyncBinaryContent, default=BinaryContent, covariant=True)
"""Which content union a :class:`NamedFile` holds -- the flavour, carried on the wrapper.

Covariant, so wrapping content never narrows where it may go: a ``NamedFile(b"x")`` fits an async
signature as readily as a sync one. **Defaulted**, and that is what keeps the flavour fence -- an
unsubscripted ``NamedFile`` in an annotation would otherwise mean ``NamedFile[Any]``, through which
an async source would reach a sync client."""


@dataclass(frozen=True, slots=True)
class NamedFile(Generic[ContentT_co]):
    """File content plus the two things a caller may want to override about how it is sent.

    Pass bare content when the defaults are right -- the filename comes from a ``Path`` or from a
    handle's own ``name``, at either destination, and the media type from the operation's declared
    one. Name this only to override either.

    Two, and deliberately not three: RFC 7578 §4.8 allows a form-data part only ``Content-Type``,
    ``Content-Disposition`` and a deprecated ``Content-Transfer-Encoding``, and both live ones are
    owned already -- the media type by this class, the disposition by the resolved filename. A
    ``headers`` field could carry only fields a conforming receiver must ignore."""

    content: ContentT_co
    """The bytes, however you hold them.

    The flavour rides on the wrapper rather than being fixed here: a sync signature names
    ``NamedFile[BinaryContent]`` and an async one ``NamedFile[AsyncBinaryContent]``. So an async
    source may carry an explicit filename on the async client, and still cannot reach a sync one."""

    filename: str | None = None
    """The name this file is sent under.

    Honoured at both destinations, and **derived** at both when left unset: a part is sent under it,
    a raw body carries it as the whole request's ``Content-Disposition``.

    Set it and it wins -- over a ``Path``'s own name and over a handle's ``.name`` alike, so wrapping
    a named source renames it rather than being ignored. Leave it unset and the content's own name is
    used, reduced to a basename so a directory never reaches the wire. A source that has no name at
    all -- ``bytes``, a ``BytesIO``, a chunk iterator -- sends none rather than an invented one
    (ADR-0053, amended)."""

    media_type: str | None = None
    """Overrides the media type the operation declares, at either destination."""


FileInput: TypeAlias = BinaryContent | NamedFile[BinaryContent]
"""What every upload parameter accepts on the sync client.

A raw request body's and a multipart part's alike: the content, or the content with its media type
or filename overridden. One name at both destinations -- only the flavour distinguishes it from
:data:`AsyncFileInput`.

The wrapper's parameter is spelled rather than left to its default, so the two aliases below and
above read as the one pair they are."""

AsyncFileInput: TypeAlias = AsyncBinaryContent | NamedFile[AsyncBinaryContent]
"""What every upload parameter accepts on the async client.

The same one name at both destinations, over the wider content union."""
