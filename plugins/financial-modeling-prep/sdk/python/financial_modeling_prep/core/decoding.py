"""Turning wire bytes into typed values: response decoding and error-body mapping.

One verb per act, and they are not interchangeable. ``decode`` builds a 2xx payload from a response
whose body has not been read; ``parse`` is the step inside it, bytes to an untyped Python value for
the adapter to validate; ``map`` is the error path's, because there the work is selection -- an
:class:`ErrorMapper` picks the documented schema for a response's status.

Every decoder is handed the same unread response and owns it from there: it either reads the body to
the end and releases the connection, or hands the open connection to the value it returns. There is
no third option, which is what lets the raw client own no connection and take no branch.

The file reads in that order -- the three contracts, then the buffered arm, the error side, the file
arm, the event-stream arm. Within an arm, sync precedes async, a private step sits immediately above
what holds it, and an arm's singletons come after the last class they need."""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from typing import Any, Final, Generic, Protocol, TypeVar

from pydantic import TypeAdapter
from typing_extensions import TypeForm

from ._internal.subscripts import SubscriptOnly
from ._internal.wire import parse_json
from .adapters import adapter_for
from .event_streams import AsyncEventStream, EventStream
from .file_responses import AsyncFileResponse, FileResponse
from .results import RawError
from .transport import AsyncHttpResponse, HttpResponse

T = TypeVar("T")
T_co = TypeVar("T_co", covariant=True)
E_co = TypeVar("E_co", covariant=True)


class ResponseDecoder(Protocol[T_co]):
    """Builds a 2xx payload from a response whose body has not been read.

    The decoder owns that body. It either reads it to the end and releases the connection -- what
    every model, text and no-content decoder does, through :class:`BufferedDecoder` -- or hands the
    still-open connection to the value it returns, which becomes responsible for releasing it
    (:class:`FileResponse`). There is no third option: a 2xx response leaves ``execute`` owned by
    exactly one object, and a decoder that neither read nor handed over would strand a pool
    connection."""

    def decode(self, response: HttpResponse) -> T_co: ...


class AsyncResponseDecoder(Protocol[T_co]):
    """The twin of :class:`ResponseDecoder`, over the async response.

    ``decode`` is an ``async def`` here rather than returning ``T | Awaitable[T]``. That union
    spelling exists so one *static* auth scheme can satisfy both flavours; nothing about reading a
    body is static, so there is nothing for it to buy -- the same reasoning that settled
    :meth:`AsyncTokenSource.fetch`. The cost is an ``await`` on :data:`async_file_decoder` that
    never suspends, which is the honest price of one signature per flavour."""

    async def decode(self, response: AsyncHttpResponse) -> T_co: ...


class ErrorMapper(Protocol[E_co]):
    """Maps a non-2xx response to the operation's typed error body -- a union of the
    documented error schemas, or ``RawError`` for an unmapped status.

    Takes the two facts a mapper uses and no envelope around them: the status it switches on, and
    the body it decodes. Both are values by the time this runs -- the raw client has read the body
    and released the connection before calling -- so there is nothing here that could hold a
    connection open, and nothing to ask whether it has been read yet."""

    def map(self, status_code: int, content: bytes) -> E_co: ...


@dataclass(frozen=True, slots=True)
class BufferedDecoder(Generic[T]):
    """Reads a 2xx body to the end, releases the connection, then decodes what it read.

    The bridge between a seam that hands every decoder an unread response and the decoders whose
    payload is a value rather than a connection. ``decode_body`` is the step that turns the buffered
    response into that value -- a JSON parse, a text parse, or nothing at all.

    Written once per flavour instead of once per format, which is what lets the three steps below
    stay plain ``bytes -> T`` functions: they are the same callables a generated error mapper reaches
    through ``decode_json``, so one parse serves the success path and the error path alike.

    The body is read even where the payload ignores it, as :data:`empty_response`'s does: an unread
    body cannot be returned to the pool, only abandoned. The ``finally`` is what makes a failed read
    release rather than leak, and the parse runs *after* it, so nothing holds a socket while pydantic
    works and a rejected payload cannot strand a connection either."""

    decode_body: Callable[[bytes], T]

    def decode(self, response: HttpResponse) -> T:
        try:
            content = response.read()
        finally:
            response.close()
        return self.decode_body(content)


@dataclass(frozen=True, slots=True)
class AsyncBufferedDecoder(Generic[T]):
    """The twin of :class:`BufferedDecoder`, over the async response."""

    decode_body: Callable[[bytes], T]

    async def decode(self, response: AsyncHttpResponse) -> T:
        try:
            content = await response.aread()
        finally:
            await response.aclose()
        return self.decode_body(content)


def _decode_utf8(content: bytes) -> str:
    """Read a buffered body as UTF-8 text, refusing a byte that is not.

    ``strict``: on the payload path an undecodable byte is corruption, and the caller is owed the
    failure rather than a U+FFFD standing in for it. A diagnostic reader replaces instead -- see
    :meth:`RawError.text`. The charset is fixed at UTF-8 here; were a response charset ever
    spec-derived the way a request's is, this is the argument it would become.

    The plain-text counterpart of :func:`parse_json`, and the only other step a :class:`BodyDecoder`
    is built over. Private, because nothing outside this module reads a body as text:
    :meth:`RawError.text` has its own, replacing posture.

    Args:
        content: The buffered body.

    Returns:
        The body as text.

    Raises:
        UnicodeDecodeError: If the body is not UTF-8."""
    return content.decode("utf-8", errors="strict")


@dataclass(frozen=True, slots=True)
class BodyDecoder(Generic[T]):
    """Reads a buffered body as a Python value, then validates it through ``adapter``.

    The decode *step*, not a decoder for the seam: :class:`BufferedDecoder` wraps it for an endpoint,
    and ``decode_json`` hands the same bound method to a generated error mapper.

    ``parse`` is the whole difference between a JSON body and a plain-text one -- ``parse_json``
    for the first, :func:`_decode_utf8` for the second. It is the *format*, and a format is data:
    both produce the same ``BodyDecoder[T]``, so nothing above this class asks which it holds. What
    may never become data is the *shape* a factory returns -- see :class:`_BufferedDecoderFactory`.

    Its result is deliberately untyped. What a body parses to is the adapter's to judge and ``T`` is
    solved from ``adapter`` alone: typing it ``str`` would refuse ``parse_json``, and typing it ``T``
    would claim a parse had already validated."""

    parse: Callable[[bytes], Any]
    adapter: TypeAdapter[T]

    def decode(self, content: bytes) -> T:
        return self.adapter.validate_python(self.parse(content))


@dataclass(frozen=True, slots=True)
class _BufferedDecoderFactory(SubscriptOnly):
    """``json_decoder[T]`` / ``text_decoder[T]`` -- build a decoder that reads a buffered body.

    One class for two formats, because both produce the same thing: a ``ResponseDecoder[T]`` whose
    ``T`` is the subscript. The format is ``parse``, a field, and ``json_decoder`` / ``text_decoder``
    below are the whole difference between them. Its adapter comes from :func:`adapter_for`, the one
    cache the request path (``json_body``, ``param``) draws from too.

    The line a field may not cross is the *return shape*. ``ResponseDecoder[T]``,
    ``AsyncResponseDecoder[T]`` and ``Callable[[bytes], T]`` each depend on the subscripted type, and
    Python has no higher-kinded types, so no one class can produce all three -- which is the precision
    that makes ``json_decoder[int]`` an error where ``ApiResult[str, ...]`` is declared. One class per
    shape is the floor, and this is one of the three.

    The subscript is a ``TypeForm`` (PEP 747) rather than a ``type[T]``, so a runtime union alias
    (``Person``, which is ``Employee | Boss``), an ``Annotated`` wire-format alias and a
    ``list[...]`` wrapper are each as acceptable as a concrete class and ``T`` stays precise for all
    of them. That precision is what makes an endpoint's declared payload type checkable against what
    it decodes. A ``type[T]``-plus-``object`` overload pair cannot: given a declared type the precise
    overload does not fit, inference falls through to the ``object`` one, yields ``Any``, and the
    disagreement has nowhere left to surface. And because the factory declares no ``__call__``, the
    type cannot be omitted (``[operator]``); the one inherited from :class:`SubscriptOnly` is
    checker-invisible and only guides."""

    parse: Callable[[bytes], Any]
    factory_name: str
    spelling: str

    def __getitem__(self, declared: TypeForm[T]) -> ResponseDecoder[T]:
        return BufferedDecoder(BodyDecoder(self.parse, adapter_for(declared)).decode)


@dataclass(frozen=True, slots=True)
class _AsyncBufferedDecoderFactory(SubscriptOnly):
    """``async_json_decoder[T]`` / ``async_text_decoder[T]`` -- the async twins; see the sync one.

    A separate class rather than a third field, and that is the rule stated there read the other way
    round: an argument position is contravariant, so an ``AsyncResponseDecoder[T]`` can never satisfy
    the sync seam nor the reverse, and the flavour is exactly what may not become data. Which is what
    makes this a build-time distinction rather than a coroutine nobody awaited."""

    parse: Callable[[bytes], Any]
    factory_name: str
    spelling: str

    def __getitem__(self, declared: TypeForm[T]) -> AsyncResponseDecoder[T]:
        return AsyncBufferedDecoder(BodyDecoder(self.parse, adapter_for(declared)).decode)


json_decoder: Final = _BufferedDecoderFactory(
    parse_json, "json_decoder", "decoder=json_decoder[T], e.g. json_decoder[Person]"
)
text_decoder: Final = _BufferedDecoderFactory(
    _decode_utf8, "text_decoder", "decoder=text_decoder[T], e.g. text_decoder[int]"
)
async_json_decoder: Final = _AsyncBufferedDecoderFactory(
    parse_json, "async_json_decoder", "decoder=async_json_decoder[T], e.g. async_json_decoder[Person]"
)
async_text_decoder: Final = _AsyncBufferedDecoderFactory(
    _decode_utf8, "async_text_decoder", "decoder=async_text_decoder[T], e.g. async_text_decoder[int]"
)


class _DecodeJsonFactory(SubscriptOnly):
    """``decode_json[T](content)`` -- decode a JSON body as the subscripted type, now.

    The result is typed as the subscripted type whatever shape it takes -- a concrete class, a
    union such as ``Accountant | Manager``, an ``Annotated`` alias -- so a generated error mapper
    returns its documented body union directly, with no ``cast`` standing in for what the type
    system now carries itself.

    Its format is written in the body rather than passed as a field, unlike the two buffered
    factories: this shape has one other member, ``decode_text``, and that one is callable bare.
    Parametrising a class for effectively one instance would hand ``decode_text`` a ``factory_name``
    and a ``spelling`` it can never raise."""

    factory_name = "decode_json"
    spelling = "decode_json[T](content), e.g. decode_json[ProblemDetails](content)"

    def __getitem__(self, declared: TypeForm[T]) -> Callable[[bytes], T]:
        return BodyDecoder(parse_json, adapter_for(declared)).decode


class _DecodeTextFactory:
    """``decode_text[T](content)`` -- decode a plain-text body, now; see ``decode_json``.

    Also callable bare -- ``decode_text(content)`` -- which is the ``str`` default the retired
    two-member overload existed to carry: the default lives on ``__call__`` and a named type can
    only take the subscript path, so a mismatch has nowhere to fall through to."""

    def __getitem__(self, declared: TypeForm[T]) -> Callable[[bytes], T]:
        return BodyDecoder(_decode_utf8, adapter_for(declared)).decode

    def __call__(self, content: bytes) -> str:
        return self[str](content)


decode_json: Final = _DecodeJsonFactory()
decode_text: Final = _DecodeTextFactory()


def _discard_body(content: bytes) -> None:
    """Discard a buffered body, for an operation whose 2xx declares none.

    The third decode step, beside :func:`parse_json` and :func:`_decode_utf8`, and the only one that
    reads nothing: what arrived is never inspected, so correctness does not rest on the body being
    empty in fact. It is read all the same, one layer up in :class:`BufferedDecoder`, because an
    unread body has to abandon its connection rather than return it to the pool.

    Private, like :func:`_decode_utf8`: what an operation names is the singleton below, never this.

    Args:
        content: The buffered body, whatever arrived in it.

    Returns:
        ``None``, always."""
    return None


empty_response: Final[ResponseDecoder[None]] = BufferedDecoder(_discard_body)
"""Decoder for an operation whose 2xx body is empty, and the success-side twin of
:data:`raw_error_response`.

It is the reason ``decoder`` is a required argument rather than an optional one: an operation that
returns no content says so by naming this, instead of by leaving the argument out. Presence is
auditable where absence is not -- a missing ``decoder=`` could be a no-content operation or a
generator that dropped the line, and only one of those should compile.

Naming it is also what keeps the payload type honest. ``T`` is solved from this argument, so the
operation can declare ``ApiResult[None, E]`` and nothing else. Were the argument omitted instead,
``T`` would be solved from the declared type, and an operation that parses nothing could claim any
payload it liked and hand back ``None`` at runtime -- the last place a declared type could go
unstated, now that each factory makes its own subscript mandatory.

Not subscripted, and not a factory: there is no type to name. ``json_decoder[None]`` would still
parse the body and raise on an empty one, which is the opposite of what this does.

Carries nothing SDK-specific, so it lives here rather than in the generated error layer, and is
shared by every such operation."""

async_empty_response: Final[AsyncResponseDecoder[None]] = AsyncBufferedDecoder(_discard_body)
"""The async twin of :data:`empty_response`; a sync decoder on the async seam is a build failure."""


@dataclass(frozen=True, slots=True)
class RawErrorResponse:
    """Error mapper for an operation that declares no error schemas.

    Deliberately has **no** ``match`` on the status code: the absence is the
    signal. Where an operation's spec documents error responses, its own mapper
    in the generated error layer selects a schema per status; where it documents
    none there is nothing to select, so every non-2xx response maps to the same
    :class:`RawError` -- status plus the undecoded body, decoded on demand.

    Carries nothing SDK-specific, so it lives here rather than in the generated
    error layer, and is shared by every such operation."""

    def map(self, status_code: int, content: bytes) -> RawError:
        return RawError(status_code, content)


raw_error_response: Final[ErrorMapper[RawError]] = RawErrorResponse()


@dataclass(frozen=True, slots=True)
class FileDecoder:
    """Decoder for an operation whose 2xx body is a file, handing it the open connection.

    Not subscripted, and not a factory: a file bypasses the model layer, so there is no adapter to
    name -- the same absence that leaves ``file_part`` unsubscripted on the request side.

    Naming it is what keeps the payload solved from an *argument* rather than from the seam's own
    return type, which is what lets a second streamed payload shape join ``execute`` instead of
    forking it."""

    def decode(self, response: HttpResponse) -> FileResponse:
        return FileResponse(response)


@dataclass(frozen=True, slots=True)
class AsyncFileDecoder:
    """Decoder for an operation whose 2xx body is a file; the twin of :class:`FileDecoder`.

    ``async def`` with nothing awaited: the payload is ready, and the keyword is what makes this
    decoder unusable at the sync seam."""

    async def decode(self, response: AsyncHttpResponse) -> AsyncFileResponse:
        return AsyncFileResponse(response)


file_decoder: Final[ResponseDecoder[FileResponse]] = FileDecoder()
async_file_decoder: Final[AsyncResponseDecoder[AsyncFileResponse]] = AsyncFileDecoder()


@dataclass(frozen=True, slots=True)
class EventStreamDecoder(Generic[T]):
    """Response decoder for an operation whose 2xx body is an event stream.

    Hands the open connection to the :class:`EventStream` it builds, exactly as :class:`FileDecoder`
    does with its file: the body is the payload, so nothing is read here.

    ``decode_data`` is how each event's ``data`` becomes a ``T`` -- the adapter's JSON entry point or
    its plain-value one, chosen by the factory that built this -- and ``sentinel`` is the ``data``
    value that ends the stream, ``None`` where the operation declares none. The format is which
    callable was handed in, never a flag read at runtime."""

    decode_data: Callable[[str], T]
    sentinel: str | None

    def decode(self, response: HttpResponse) -> EventStream[T]:
        return EventStream(response, self.decode_data, self.sentinel)


@dataclass(frozen=True, slots=True)
class AsyncEventStreamDecoder(Generic[T]):
    """The twin of :class:`EventStreamDecoder`, over the async response.

    ``async def`` with nothing awaited, as :class:`AsyncFileDecoder` is: the payload is ready, and the
    keyword is what makes this decoder unusable at the sync seam."""

    decode_data: Callable[[str], T]
    sentinel: str | None

    async def decode(self, response: AsyncHttpResponse) -> AsyncEventStream[T]:
        return AsyncEventStream(response, self.decode_data, self.sentinel)


@dataclass(frozen=True, slots=True)
class EventStreamDecoderBuilder(Generic[T]):
    """What ``json_event_decoder[T]`` hands back: the type resolved, the sentinel still to name.

    Calling it -- ``(sentinel="[DONE]")``, or ``()`` for an operation declaring none -- yields the
    decoder. It is not itself one: it has no ``decode``, so ``decoder=json_event_decoder[T]`` with the
    call left off is an ``[arg-type]`` build failure rather than a stream that never ends. The
    sentinel is keyword-only, so a positional one is a build failure too."""

    decode_data: Callable[[str], T]

    def __call__(self, *, sentinel: str | None = None) -> ResponseDecoder[EventStream[T]]:
        return EventStreamDecoder(self.decode_data, sentinel)


@dataclass(frozen=True, slots=True)
class AsyncEventStreamDecoderBuilder(Generic[T]):
    """The twin of :class:`EventStreamDecoderBuilder`, yielding the async decoder."""

    decode_data: Callable[[str], T]

    def __call__(self, *, sentinel: str | None = None) -> AsyncResponseDecoder[AsyncEventStream[T]]:
        return AsyncEventStreamDecoder(self.decode_data, sentinel)


def _validates_json(adapter: TypeAdapter[Any]) -> Callable[[str], Any]:
    """An event's ``data`` parsed and validated in one pass, for an event stream carrying JSON.

    The adapter's own JSON entry point rather than a parse followed by a validation: one pass, no
    intermediate Python object, on a path that runs once per event rather than once per response.
    That is why the two event factories name an entry point where the two buffered ones name a
    ``parse`` -- the step they share comes *after* the adapter there, and *is* the adapter here.

    Args:
        adapter: The adapter for the subscripted event type.

    Returns:
        A callable turning one event's ``data`` into that type."""
    return adapter.validate_json


def _validates_value(adapter: TypeAdapter[Any]) -> Callable[[str], Any]:
    """An event's ``data`` validated as the value it already is, for an event stream carrying text.

    ``[str]`` passes the string through and ``[int]`` coerces it, exactly as ``text_decoder[int]``
    would; see :func:`_validates_json`.

    Args:
        adapter: The adapter for the subscripted event type.

    Returns:
        A callable turning one event's ``data`` into that type."""
    return adapter.validate_python


@dataclass(frozen=True, slots=True)
class _EventDecoderFactory(SubscriptOnly):
    """``json_event_decoder[T](sentinel=...)`` / ``text_event_decoder[T](...)`` -- an event stream.

    One class for two formats, for the reason :class:`_BufferedDecoderFactory` gives: both produce
    the same thing, an :class:`EventStreamDecoderBuilder` whose ``T`` is the subscript. ``read_data``
    is the whole difference between them, and it may be a field because it carries no type of its
    own; only the return *shape* may not.

    The subscript is a ``TypeForm``, exactly as ``json_decoder``'s is, so a union alias such as a
    discriminated event union routes each event through its ``WireDiscriminator``. What comes back is
    a *builder* rather than a decoder, because an event stream carries one spec fact the type cannot:
    the ``data`` value that ends it. And because the factory declares no ``__call__``, the type cannot
    be omitted (``[operator]``); the one inherited from :class:`SubscriptOnly` is checker-invisible
    and only guides."""

    read_data: Callable[[TypeAdapter[Any]], Callable[[str], Any]]
    factory_name: str
    spelling: str

    def __getitem__(self, declared: TypeForm[T]) -> EventStreamDecoderBuilder[T]:
        return EventStreamDecoderBuilder(self.read_data(adapter_for(declared)))


@dataclass(frozen=True, slots=True)
class _AsyncEventDecoderFactory(SubscriptOnly):
    """The async twins; see the sync one.

    A separate class rather than a third field, and that is the rule stated there read the other way
    round: an :class:`AsyncEventStreamDecoderBuilder` builds a decoder the sync seam cannot take, so
    the flavour is exactly what may not become data."""

    read_data: Callable[[TypeAdapter[Any]], Callable[[str], Any]]
    factory_name: str
    spelling: str

    def __getitem__(self, declared: TypeForm[T]) -> AsyncEventStreamDecoderBuilder[T]:
        return AsyncEventStreamDecoderBuilder(self.read_data(adapter_for(declared)))


json_event_decoder: Final = _EventDecoderFactory(
    _validates_json,
    "json_event_decoder",
    "decoder=json_event_decoder[T](), e.g. json_event_decoder[Chunk](sentinel='[DONE]')",
)
text_event_decoder: Final = _EventDecoderFactory(
    _validates_value, "text_event_decoder", "decoder=text_event_decoder[T](), e.g. text_event_decoder[str]()"
)
async_json_event_decoder: Final = _AsyncEventDecoderFactory(
    _validates_json, "async_json_event_decoder", "decoder=async_json_event_decoder[T]()"
)
async_text_event_decoder: Final = _AsyncEventDecoderFactory(
    _validates_value, "async_text_event_decoder", "decoder=async_text_event_decoder[T]()"
)
