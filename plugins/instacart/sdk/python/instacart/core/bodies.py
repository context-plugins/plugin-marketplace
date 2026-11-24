"""Request bodies: the wire shapes a transport receives, and the factories that build them.

A buffered body **is** its wire bytes by the time it exists -- UTF-8 for JSON (RFC 8259) and for a
percent-encoded form (pure ASCII, so the same bytes under any ASCII-compatible charset), and the
declared charset for a text body. A multipart body's text parts carry their UTF-8 bytes the same
way; only the framing around them is the encoder's. File content is deliberately
the opposite: a file is *described* (a ``Path``, a handle, an iterable of chunks) and first read
inside the transport when the request is sent, so building a body never opens a resource. Each
factory validates any typed value against the type the endpoint declared and dumps it through that
type's adapter, so a transport, including a caller-supplied one, never serializes anything, and
:class:`HttpRequest` never carries a pydantic adapter. A body also carries its own label:
:func:`content_headers` is the one place a body's ``Content-Type`` (and a raw body's
``Content-Disposition``) is spelled, folded onto the request beneath every parameter layer.

``RequestBody`` is a closed union rather than a Protocol: all five shapes live here and are
generator-emitted, so the set cannot grow behind the runtime's back."""

from __future__ import annotations

import codecs
from collections.abc import Sequence
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Final, Generic, TypeAlias, TypeVar, overload

from pydantic import TypeAdapter
from typing_extensions import TypeForm, assert_never

from ._internal.content_disposition import render_content_disposition
from ._internal.flattening import flatten
from ._internal.subscripts import SubscriptOnly
from ._internal.urls import urlencode_params
from ._internal.wire import compact_json, to_text
from .adapters import adapter_for, validation_target
from .files import AsyncBinaryContent, AsyncFileInput, NamedFile
from .optionality import strip_unset
from .params import Param

T = TypeVar("T")


@dataclass(frozen=True, slots=True)
class JsonBody(Generic[T]):
    """A JSON body of declared type ``T``: its wire bytes, under the operation's declared media type.

    ``T`` records the type the value was validated and dumped *as*; ``content`` is that dump --
    compact, UTF-8, produced once by ``json_body[...]`` -- so the transport sends it unchanged and a
    log line describing the body shows the same bytes. ``media_type`` is the operation's content key:
    ``application/json`` almost always, ``application/merge-patch+json`` and the ``+json`` vendor
    types being the same wire shape under a different label. Construct it through ``json_body[...]``,
    whose subscript binds ``T``."""

    content: bytes
    media_type: str


@dataclass(frozen=True, slots=True)
class FormBody:
    """A url-encoded form body: its wire bytes.

    Rendered by the encoder the query string uses (``urlencode_params``), so a form field and a
    query parameter of one value are the same bytes, in the same order. Percent-encoding leaves
    ASCII, so the UTF-8 bytes of that text are the same bytes under any ASCII-compatible charset."""

    content: bytes


@dataclass(frozen=True, slots=True)
class MultipartText:
    """One non-file part: a named text value, already encoded as UTF-8, optionally under a declared media type.

    A JSON part is not a separate shape: it is a text part under the media type the operation
    declares for it (``application/json``, unless its encoding object says otherwise) -- the
    identical ``(None, content, media_type)`` wire spelling either way. Classes split only where the
    transport must act differently, and here it does not. The bytes are the factory's, as every
    in-memory body's are: the encoder frames a part and encodes nothing."""

    name: str
    content: bytes
    media_type: str | None = None


@dataclass(frozen=True, slots=True)
class MultipartFile:
    """One file part, its filename and media type already resolved.

    Kept distinct from :class:`NamedFile` deliberately: there ``filename=None`` means *derive it*;
    here it means *resolved to absent*. Merging the two would conflate an unresolved state with a
    resolved one. ``media_type`` has no absent state at all -- :func:`file_part` always resolves
    one, so a transport is never handed the question and the underlying library's own guess is
    unreachable."""

    name: str

    content: AsyncBinaryContent
    """The bytes, however the caller held them.

    The *async* union, for the reason :attr:`BinaryBody.content` is one: ``HttpRequest`` is a single
    shape for both flavours, and which arms are reachable is fixed by the emitted endpoint's own
    parameter type. A transport is handed them unresolved -- the sync one rejects the async arms
    with a guided ``TypeError``, and an async one must read them before encoding, because a
    multipart encoder pulls from a synchronous generator and cannot await."""

    filename: str | None
    media_type: str


MultipartPart: TypeAlias = MultipartText | MultipartFile
"""One part of a multipart body -- text under a name, or a file. The transport's ``match`` over
this union is exhaustiveness-checked, so a new part kind cannot be half-wired."""


@dataclass(frozen=True, slots=True)
class MultipartFiles:
    """One file field carrying several files -- the resolved part for each, under one name.

    What ``file_part`` returns for a list, and what ``multipart_body`` unfolds into its
    :class:`MultipartFile` members, exactly as it flattens a :class:`Param` into
    :class:`MultipartText` parts. Deliberately **not** a member of :data:`MultipartPart`: a
    transport sees one part per file and never this wrapper, so the wire vocabulary stays two
    classes and no ``match`` over it gains an arm."""

    parts: Sequence[MultipartFile]


@dataclass(frozen=True, slots=True)
class MultipartBody:
    """A multipart body: its parts, in the order they go on the wire.

    One ordered sequence rather than a fields/files mapping pair, because part order is observable
    on the wire and a mapping cannot interleave text parts with file parts."""

    parts: Sequence[MultipartPart]


@dataclass(frozen=True, slots=True)
class BinaryBody:
    """A raw request body -- its declared media type, the caller's name for it, and the bytes.

    ``content`` is typed as the *async* union because ``HttpRequest`` is one shape for both
    flavours; which arms are reachable is fixed by the endpoint's own parameter type, exactly as
    ``custom_http_client`` vs ``custom_async_http_client`` fixes the transport -- and the sync
    transport rejects the two async arms with a guided ``TypeError``.

    ``filename`` is resolved, in :class:`MultipartFile`'s exact sense: ``None`` means *resolved to
    absent*, never *derive one*. :func:`binary_body` has already applied the same fallback a part
    gets, so the two classes' ``filename`` fields mean the same thing. :func:`content_headers`
    renders it onto the request as ``Content-Disposition``."""

    content: AsyncBinaryContent
    filename: str | None
    media_type: str


@dataclass(frozen=True, slots=True)
class TextBody:
    """A body that is one text value, already encoded, under a declared media type and charset.

    ``charset`` is the spec's own label (``utf-8``, ``iso-8859-1``, ``windows-1252``) and does two
    jobs from one field: the factory encoded the text with it, and :func:`content_headers` writes
    the label ``media_type; charset=<charset>`` onto the request from that same field -- so the bytes
    and the label cannot disagree, and a transport encodes nothing. Text the charset cannot represent
    is refused at the factory, before any request is composed. The factory defaults ``charset`` to
    ``utf-8`` and ``media_type`` to ``text/plain``, and an endpoint writes either only where the spec
    differs -- so the body a transport sees is always explicit."""

    content: bytes
    media_type: str
    charset: str


RequestBody: TypeAlias = JsonBody[Any] | FormBody | MultipartBody | BinaryBody | TextBody
"""The body an endpoint hands to ``execute`` -- exactly one of the five shapes above.

A union rather than one class with five optional fields: of the combinations such a class would
admit, only five are legal, and the illegal rest had to be rejected at runtime. Here they cannot
be written down. A transport ``match``es on this to pick its body arguments."""


def content_headers(body: RequestBody | None) -> dict[str, str]:
    """The headers a body carries for itself: its media type, and a raw body's name.

    Folded **under** the resolved parameter layers by ``BaseRawClient._build_request``, so a caller's
    ``extra_headers`` still wins, and a transport sends ``request.headers`` as given. A multipart body
    contributes nothing: its ``Content-Type`` carries the boundary the encoder mints, so only the
    transport can write it (ADR-0051 keeps httpx's encoder).

    Args:
        body: The body an endpoint built, or ``None`` for a request that carries none.

    Returns:
        Lowercased header names to values; empty for no body and for a multipart one."""
    match body:
        case None | MultipartBody():
            return {}
        case JsonBody(_, media_type):
            return {"content-type": media_type}
        case FormBody():
            return {"content-type": "application/x-www-form-urlencoded"}
        case BinaryBody(_, str() as filename, media_type):
            return {"content-type": media_type, "content-disposition": render_content_disposition(filename)}
        case BinaryBody(_, _, media_type):
            return {"content-type": media_type}
        case TextBody(_, media_type, charset):
            return {"content-type": f"{media_type}; charset={charset}"}


def _json_value(adapter: TypeAdapter[T], value: T) -> object:
    # The one validate -> dump -> strip_unset pipeline json_body and json_part share.
    validated = adapter.validate_python(value)
    return strip_unset(validated, adapter.dump_python(validated, mode="json"))


def _derive_filename(content: AsyncBinaryContent) -> str | None:
    # Both destinations' fallback. A Path names its file; a handle may carry a filesystem-shaped
    # ``name`` -- used only when it is a str, since ``open(fd)`` yields an int one. The basename
    # only, so a caller's directories never reach the wire. Otherwise no filename at all: the
    # underlying library's fallback is the literal string "upload", which is worse than omitting an
    # optional parameter (RFC 7578's at a part, RFC 6266's at a raw body).
    if isinstance(content, Path):
        return content.name
    name = getattr(content, "name", None)
    if not isinstance(name, str):
        return None
    return Path(name).name or None


@dataclass(frozen=True, slots=True)
class _DeclaredJsonBody(Generic[T]):
    """A JSON body's declared type, bound to its adapter; call it with the value and its media type.

    Built by ``json_body[T]``, the ``_DeclaredParam`` shape: the keyword-only ``media_type`` is
    checked at the call, and a ``Callable`` could spell neither it nor the check. It defaults to
    ``application/json``, so an endpoint writes it only where the operation's key differs -- the
    rule ``param``'s ``serialization_format`` set."""

    adapter: TypeAdapter[T]

    def __call__(self, value: T, /, *, media_type: str = "application/json") -> JsonBody[T]:
        return JsonBody(compact_json(_json_value(self.adapter, value), ensure_ascii=False).encode("utf-8"), media_type)


class _JsonBodyFactory(SubscriptOnly):
    """``json_body[T](value)`` -- name the body's declared type in the subscript.

    **A subscript and then a call, and the split is the whole point.** ``T`` is solved from the
    subscript alone, *before* the value is compared against it, which is what makes a generator
    emitting the wrong type a build failure: ``json_body[int](employee)`` is rejected with
    ``Argument 1 has incompatible type "Employee | EmployeeDict"; expected "int"``. Written as one
    call it could not be: ``json_body(employee, int)`` makes mypy solve ``T`` from *both*
    arguments and join them to ``object``, so every mismatch type-checks -- measured, along with
    the other shapes that fail the same way, in ADR-0013 (whose curried spelling this subscript
    replaced; the re-measurement is in docs/plans/subscripted-typed-factories.md).

    The factory declares no ``__call__``, so *omitting* the declared type is a build failure too:
    ``json_body(employee)`` is rejected statically (``[operator]``) -- the guarantee the curried
    signature used to carry. The runtime ``__call__`` inherited from :class:`SubscriptOnly` is
    invisible to type checkers and
    exists only to turn that same mistake into a guided ``TypeError``.

    The subscript is a ``TypeForm``, exactly as in ``json_decoder[...]``, so a runtime union alias
    (``Person``, which is ``Employee | Boss``) binds ``T`` as precisely as a concrete class does.

    The subscript is the endpoint's declared parameter type **in full**, dict-shaped companion
    included: ``json_body[Employee | EmployeeDict]``. The accepted value is then exactly ``T``, so
    there is no permissive mapping half for a stray ``dict[str, Any]`` to slip through -- and only
    the model arm reaches :func:`adapter_for`, via :func:`validation_target`, because a companion
    is an input shape and never a wire shape.

    Handles scalars, dicts, lists and nested structures, and honours ``Annotated`` serializers
    (``PlainSerializer`` and friends) because serialization goes through the type's own adapter.
    Validation runs before the dump, so dict-shaped input is coerced into the model through its own
    validation; a model instance passes through unchanged (``revalidate_instances`` defaults to
    ``"never"``), making this byte-identical for non-dict values. ``strip_unset`` then distinguishes
    a field the caller never touched (``OptionalNullable[...] = UNSET``, omitted) from one set
    explicitly to ``None`` (kept as null) -- see docs/designs/optional-nullable-fields.md.

    ``media_type`` is the operation's content key -- ``application/json`` by default, and written at
    the emission site only where the key differs: a ``+json`` vendor type is the same wire shape under
    its own label, only the endpoint knows which, and the transport carries whichever the body holds
    (ADR-0048)."""

    factory_name = "json_body"
    spelling = "json_body[T](value), e.g. json_body[Employee | EmployeeDict](model)"

    def __getitem__(self, declared: TypeForm[T]) -> _DeclaredJsonBody[T]:
        return _DeclaredJsonBody(adapter_for(validation_target(declared)))


json_body: Final = _JsonBodyFactory()


def form_body(*params: Param[Any]) -> FormBody:
    """Render ``params`` into a url-encoded form body.

    Args:
        params: The form parameters, in wire order, each already carrying its declared type's adapter.

    Returns:
        A :class:`FormBody` holding the wire bytes.

    Raises:
        ValueError: If a parameter's value fails validation against its declared type."""
    return FormBody(urlencode_params(params).encode("utf-8"))


def multipart_body(*parts: Param[Any] | MultipartPart | MultipartFiles | None) -> MultipartBody:
    """Build a multipart body from parameters and parts, in the order written.

    Variadic, like ``AllSchemes``: the parts *are* the argument list, so an emission site nests no
    list literal. A field that is an array of files is still one argument --
    ``file_part("files", files)`` -- and is unfolded here, one part per file, so no emission site
    loops or splats.

    A :class:`Param` is flattened exactly as a form field is -- so an array explodes and a map
    becomes bracketed keys -- and each resulting pair becomes one text part. A
    :class:`MultipartFiles` contributes each of its files as its own part. A part built by
    :func:`file_part` for one file, or by ``json_part[...]``, passes through untouched. ``None`` is
    an optional part the caller omitted and contributes nothing -- the part counterpart of a
    ``param`` whose value is ``None``, spelled ``file_part(...) if x is not None else None`` at the
    emission site, for one file and for a list alike.

    Args:
        parts: Parameters and prebuilt parts, in wire order.

    Returns:
        A :class:`MultipartBody` holding one part per flattened pair, per file, or per prebuilt part.

    Raises:
        ValueError: If a parameter's value fails validation against its declared type."""
    resolved: list[MultipartPart] = []
    for part in parts:
        match part:
            case None:
                pass
            case Param():
                resolved.extend(MultipartText(key, text.encode("utf-8")) for key, text in flatten([part]))
            case MultipartFiles(files):
                resolved.extend(files)
            case MultipartText() | MultipartFile():
                resolved.append(part)
            case _:
                assert_never(part)
    return MultipartBody(resolved)


def _resolve_file(name: str, value: AsyncFileInput, media_type: str) -> MultipartFile:
    """One file's part, its filename and media type resolved through the two tiers.

    The override first, then the operation's declared value -- the rule :func:`binary_body` applies
    to the one of the two fields a raw body can carry.

    Lifted out of :func:`file_part` rather than reached by recursion through its own overloads: the
    list arm needs a :class:`MultipartFile` per item, and saying so beats resolving an overload
    against the function being defined.

    Args:
        name: The form field name the part is sent under.
        value: One file's content, or a ``NamedFile`` overriding its filename or media type.
        media_type: The media type the operation declares for this field.

    Returns:
        A :class:`MultipartFile` with no unresolved field left."""
    match value:
        case NamedFile(content, filename, override):
            return MultipartFile(
                name=name,
                content=content,
                filename=filename if filename is not None else _derive_filename(content),
                media_type=override if override is not None else media_type,
            )
        case _:
            return MultipartFile(name=name, content=value, filename=_derive_filename(value), media_type=media_type)


@overload
def file_part(
    name: str, value: Sequence[AsyncFileInput], *, media_type: str = "application/octet-stream"
) -> MultipartFiles: ...


@overload
def file_part(name: str, value: AsyncFileInput, *, media_type: str = "application/octet-stream") -> MultipartFile: ...


def file_part(
    name: str,
    value: AsyncFileInput | Sequence[AsyncFileInput],
    *,
    media_type: str = "application/octet-stream",
) -> MultipartFile | MultipartFiles:
    """One file part -- or one part per file of a list -- under ``name``; the annotation decides which.

    A binary field is emitted the same way whether its schema is one file or an array of them:
    ``file_part(name, value, media_type=...)`` with the parameter as declared, ``FileInput`` or
    ``list[FileInput]``. A list yields a :class:`MultipartFiles` that ``multipart_body`` unfolds
    into one :class:`MultipartFile` per item under the same name (RFC 7578's repeated field), each
    resolved exactly as a single file is -- so an item may be a ``NamedFile`` overriding its own
    filename or media type.

    ``media_type`` is the operation's declared one, defaulting to ``application/octet-stream`` -- RFC
    9110 8.3's answer for a payload of unknown type, and OpenAPI's own default for a binary part that
    declares none. An endpoint writes it only where the spec differs (ADR-0048), and a ``NamedFile``
    overrides whatever it is, per item for a list.

    **The filename is never read as a media type.** An extension is a claim the caller typed, not
    evidence about the bytes -- ``report.pdf`` may hold a PNG -- and checking would mean opening the
    content here, which nothing in this module does. ``application/octet-stream`` is what the SDK
    actually knows; a caller who knows better says so through ``NamedFile(content, media_type=...)``.

    **A list is always many files, and nothing has to arbitrate that.** One file's content streams
    as an ``Iterator[bytes]``, never a ``Sequence`` of them, so a ``list[bytes]`` satisfies only the
    first overload and the two arms do not overlap. A chunk *list* that is one file's content says
    so by handing over an iterator -- ``NamedFile(iter([b"a", b"b"]))`` -- and that is the whole of
    the rule (ADR-0049).

    The runtime agrees by a different route: PEP 634 defines a sequence pattern to exclude ``str``,
    ``bytes`` and ``bytearray``, the one place the language already knows a byte string is content
    rather than a collection, and an iterator is no ``Sequence`` at either level.
    ``isinstance(value, Sequence)`` would be true of ``bytes`` and send each byte as its own part.

    The overloads earn their keep beyond the return type: they give a heterogeneous list literal --
    ``[b"one", NamedFile(b"two", filename="2.bin")]`` -- an element type to check against. Collapsed
    into one signature over a union, that literal joins to ``list[object]`` and is rejected.

    Nothing is opened or read here -- the content descriptor is carried as given, and the first read
    happens in the transport when the request is sent.

    A part with no filename reads as a form *field* rather than a file to many servers (measured:
    ASP.NET's ``IFormFile`` binding requires one). Bare ``bytes`` and a nameless reader derive no
    filename -- deliberately, since the underlying library's fallback is the literal string
    ``"upload"`` -- so name them through ``NamedFile(content, filename=...)`` when the operation
    expects a file.

    Args:
        name: The form field name this part -- or every part of the list -- is sent under.
        value: One file's content, a ``NamedFile`` overriding its filename or media type, or a
            list of either.
        media_type: The media type the operation declares for this field;
            ``application/octet-stream`` when omitted.

    Returns:
        A part carrying the content descriptor with its filename and media type resolved -- or, for
        a list, the resolved part for each item."""
    match value:
        case [*items]:
            return MultipartFiles(tuple(_resolve_file(name, item, media_type) for item in items))
        case _:
            return _resolve_file(name, value, media_type)


@dataclass(frozen=True, slots=True)
class _DeclaredJsonPart(Generic[T]):
    """A JSON part's declared type, bound to its adapter; call it with the name, value and media type.

    Built by ``json_part[T]``, the ``_DeclaredParam`` shape, for the reason ``_DeclaredJsonBody``
    gives; ``media_type`` defaults to ``application/json`` for the same reason."""

    adapter: TypeAdapter[T]

    def __call__(self, name: str, value: T, /, *, media_type: str = "application/json") -> MultipartText:
        return MultipartText(name, compact_json(_json_value(self.adapter, value)).encode("utf-8"), media_type)


class _JsonPartFactory(SubscriptOnly):
    """``json_part[T](name, value)`` -- a multipart part whose body is JSON, not a form field.

    Subscripted for the reason ``json_body`` documents: ``T`` is solved from the subscript alone,
    so a mismatched emission is a build failure. The declared type is the endpoint's in full, dict
    companion included, and only the model arm reaches the adapter.

    This is the part spelling ``(None, json, media_type)`` that the field hand-rolls at the call
    site, under the media type the operation's encoding object declares for the part --
    ``application/json`` by default, written at the emission site only where the encoding object
    says otherwise (ADR-0048). Declaring it is what makes a map-as-JSON-part and a
    map-as-form-fields two different factories rather than one factory and a flag."""

    factory_name = "json_part"
    spelling = 'json_part[T](name, value), e.g. json_part[FileMetadata | FileMetadataDict]("metadata", metadata)'

    def __getitem__(self, declared: TypeForm[T]) -> _DeclaredJsonPart[T]:
        return _DeclaredJsonPart(adapter_for(validation_target(declared)))


json_part: Final = _JsonPartFactory()


def binary_body(content: AsyncFileInput, *, media_type: str = "application/octet-stream") -> BinaryBody:
    """A raw request body under the operation's declared media type.

    ``media_type`` is the operation's ``requestBody`` content key, defaulting to RFC 9110 8.3's own
    answer for a payload of unknown type -- so an endpoint writes it only where the key differs
    (``image/png``), the rule every other body factory follows (ADR-0048).

    A ``NamedFile`` here contributes both of its overrides, and both resolve through the two tiers
    :func:`file_part` applies -- the override, then the SDK's own answer. ``media_type`` falls back
    to the operation's declared value; ``filename`` falls back to :func:`_derive_filename`, so a
    ``Path`` or a named handle is sent under its name and a nameless source under none at all
    (ADR-0053, amended). :func:`content_headers` renders it onto the request as a
    ``Content-Disposition``.

    Only the basename is sent, so a caller's directories never reach the wire.

    Nothing is opened or read here -- the content descriptor is carried as given, and the first
    read happens in the transport when the request is sent.

    Args:
        content: The body content descriptor, or a ``NamedFile`` overriding its media type or
            naming it.
        media_type: The media type the operation declares for the body;
            ``application/octet-stream`` when omitted.

    Returns:
        A :class:`BinaryBody` carrying the content, its resolved name and its resolved media
        type."""
    match content:
        case NamedFile(inner, filename, override):
            return BinaryBody(
                inner,
                filename if filename is not None else _derive_filename(inner),
                override if override is not None else media_type,
            )
        case _:
            return BinaryBody(content, _derive_filename(content), media_type)


@dataclass(frozen=True, slots=True)
class _DeclaredTextBody(Generic[T]):
    """A text body's declared type, bound to its adapter; call it with the value and its wire facts.

    Built by ``text_body[T]`` exactly as ``_DeclaredParam`` is by ``param[T]``: a frozen dataclass
    with a typed ``__call__``, so the keyword-only arguments are checked at the call without a
    callback Protocol -- which would be the one Protocol in the package not standing for an open
    seam (ADR-0041)."""

    adapter: TypeAdapter[T]

    def __call__(self, value: T, /, *, media_type: str = "text/plain", charset: str = "utf-8") -> TextBody:
        """Validate and dump ``value`` through the declared type, under the operation's wire facts.

        Args:
            value: The body value, of the declared type.
            media_type: The operation's content key, less its ``charset`` parameter; ``text/plain``
                when omitted.
            charset: That ``charset`` parameter -- the spec's label, which the codec registry
                resolves as written; ``utf-8`` when omitted.

        Returns:
            A :class:`TextBody` carrying the dumped text encoded with ``charset``, and both facts unchanged.

        Raises:
            ValueError: If ``charset`` names no codec, ``value`` fails validation, or the text holds a
                character ``charset`` cannot represent (``UnicodeEncodeError``, a ``ValueError``)."""
        try:
            codecs.lookup(charset)
        except LookupError as error:
            # ``str.encode`` would report this as LookupError, outside the ValueError contract every
            # other rejection here honours.
            raise ValueError(f"Unknown charset for a text body: {charset!r}") from error
        validated = self.adapter.validate_python(value)
        dumped = self.adapter.dump_python(validated, mode="json")
        text = dumped if isinstance(dumped, str) else to_text(dumped)
        return TextBody(text.encode(charset), media_type, charset)


class _TextBodyFactory(SubscriptOnly):
    """``text_body[T](value)`` -- a text body whose *type* picks the wire text and whose *charset*
    picks the bytes.

    ``text_body[Base64AsciiEncodedBytes](data)`` is what carries an operation whose whole body is a
    base64 string: validation passes the raw bytes through, the dump encodes -- the encoding is the
    declared type's own dump, not a call at the emission site. It is fully resident by construction,
    and the peak is about **3.7x** the payload: the caller's ``bytes``, the base64 ``str`` at 1.33x,
    and the factory's ``encode(charset)`` of that at 1.33x again. Base64 has no streaming path here
    -- the parameter is ``bytes``, so a caller cannot hand over a stream to begin with. It *is*
    chunkable at any multiple of three bytes should a spec ever need it; the arm is absent rather
    than impossible (ADR-0051 decision 6). The two
    keywords come from the operation's content key, split once at emission: the type and any other
    parameters in ``media_type``, the ``charset`` parameter on its own -- and each is written only
    where the spec differs from the default (``text/plain``, ``utf-8``), the rule ``param``'s
    ``serialization_format`` set."""

    factory_name = "text_body"
    spelling = "text_body[T](value), e.g. text_body[Base64AsciiEncodedBytes](data)"

    def __getitem__(self, declared: TypeForm[T]) -> _DeclaredTextBody[T]:
        return _DeclaredTextBody(adapter_for(validation_target(declared)))


text_body: Final = _TextBodyFactory()
