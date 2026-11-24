"""One declared value, one wire-ready form.

Every request parameter -- query, form, path, header, or a base URL's server variable -- reaches
the wire the same way: validated against the type the endpoint declared, dumped through that
type's adapter, and turned into text. Only the *arrangement* differs, and that stays with each
destination: :mod:`.flattening` explodes values into ``key[sub]`` pairs, :mod:`.urls` joins a path
value's members with ``,`` into one segment, :mod:`.headers` folds them into one field value.

That shared prefix lives here, which is why a ``datetime`` declared ``RFC1123DateTime`` renders as
its GMT string at every destination without any of them knowing what a datetime is -- and why a
fifth destination would need no serialization code of its own."""

from __future__ import annotations

import json
from collections.abc import Iterable, Mapping
from typing import Any, TypeGuard

from pydantic import ValidationError

from ..optionality import strip_unset
from ..params import Param


def wire_value(param: Param[Any]) -> object:
    """``param``'s value in wire form: validated against its declared type, then dumped.

    The same two steps, in the same order, as :func:`json_body` -- and the reason a parameter
    holds its resolved adapter rather than the type expression it came from. Validation coerces
    dict-shaped input (``Model | FooDict`` companions) through the model's own rules; the dump
    applies the type's serializer, which is what renders an ``RFC1123DateTime`` as its GMT string,
    an enum as its value and a model under its wire aliases.

    A validation failure is re-raised naming the parameter: pydantic titles the error by the
    *type* (``1 validation error for int``), which on an endpoint with five parameters leaves the
    caller guessing which one failed. ``ValidationError`` subclasses ``ValueError``, so a caller's
    ``except ValueError`` covers both spellings, and the full per-field detail rides ``__cause__``.

    ``strip_unset`` is what drops a field the caller never touched, and the only thing that can:
    ``UnsetType`` is not ``None``, so the dump keeps the key and it serializes as ``null``, which a
    JSON-encoded path segment or header value would carry verbatim. An *explicit* ``None`` is
    kept -- see docs/designs/optional-nullable-fields.md. Which of those nulls survives is the
    destination's own decision, taken in :func:`text_values` and ``flattening.flatten``: compact
    JSON can spell one, a query pair or a flat path segment cannot.

    The result is still structured -- a collection stays a list, a model stays a mapping -- because
    the query and form destination needs that shape to explode into ``key[sub]`` keys.

    Args:
        param: The parameter to render, carrying its declared type's adapter.

    Returns:
        The dumped value, still structured; a top-level set is sorted so one call yields one URL.

    Raises:
        ValueError: If the value does not match its declared type. The message names the
            parameter; pydantic's per-field detail rides ``__cause__``."""
    try:
        validated = param.adapter.validate_python(param.value)
    except ValidationError as error:
        raise ValueError(f"Parameter value does not match its declared type: {param.key}") from error

    dumped: object = strip_unset(validated, param.adapter.dump_python(validated, mode="json"))

    # JSON has no set, so the dump has already flattened one into a list in hash-iteration order.
    # Sorting is what keeps one call producing one URL across runs. A *top-level* set is the whole
    # reach on purpose: a set nested inside a container is not an emittable declared type --
    # ``adapters.py``'s ``_CONTAINERS`` and ``strip_unset`` close at ``list``/``dict`` for the same
    # reason -- so walking deeper would be speculative surface for a shape no spec yields.
    if isinstance(validated, (set, frozenset)) and isinstance(dumped, list):
        return sorted(dumped, key=str)

    return dumped


def text_values(param: Param[Any]) -> tuple[str, ...]:
    """``param`` as the flat texts it contributes -- one per path segment or header list member.

    Empty means it contributes nothing: its value was ``None``, or its collection was. A scalar is
    one text, a flat collection is one text per member, and anything structured -- a mapping, a
    model, or a collection holding either -- is one text of compact JSON, since neither a path
    segment nor a header value can carry a nested shape any other way.

    The arrangement is settled *before* the ``None`` rule, because the two arrangements can
    represent different things: compact JSON spells ``null``, so a structured collection carries a
    ``None`` member as one, while a flat collection has no such spelling and refuses it.

    Args:
        param: The parameter to render.

    Returns:
        One text per segment or header member; empty when the parameter contributes nothing.

    Raises:
        ValueError: If the value does not match its declared type, or if a *flat* collection holds
            a ``None`` -- neither a path segment nor a header member can spell one."""
    value = wire_value(param)
    if value is None:
        return ()

    if isinstance(value, Mapping):
        return (compact_json(value),)

    if not is_collection(value):
        return (to_text(value),)

    members = list(value)
    if any(isinstance(member, Mapping) or is_collection(member) for member in members):
        return (compact_json(members),)

    if any(member is None for member in members):
        # Query and form encoding can drop a member, because it can also repeat or omit a key.
        # Neither of these destinations can: a path would address a different route and a header
        # would carry an empty list slot, both silently.
        raise ValueError(f"Parameter value contains None: {param.key}")

    return tuple(to_text(member) for member in members)


def to_text(value: object) -> str:
    """One dumped scalar as the text a URL or a header carries.

    The adapter has already applied wire aliases, enum values and temporal formats, so only
    booleans are left: every destination here is text and expects JSON's ``true``/``false``,
    whereas ``str(True)`` would emit ``True``. Called only where a value actually becomes text,
    which is what lets the structured branches above keep real booleans for :func:`compact_json`.

    Args:
        value: One already-dumped scalar.

    Returns:
        Its text form, with booleans lowercased to JSON's spelling."""
    if isinstance(value, bool):
        return "true" if value else "false"

    return str(value)


def parse_json(content: bytes) -> Any:
    """Parse a response body as JSON, normalising every way it can fail.

    Parsed from the bytes rather than from a decoded ``str``, so RFC 8259 encoding detection applies
    (UTF-8/16/32, BOM-tolerant) and an undecodable byte is a failure rather than a replacement
    character smuggled into a successful payload.

    ``json.JSONDecodeError`` and ``UnicodeDecodeError`` are both ``ValueError``s already, but they
    read as two unrelated faults; a caller who reached a body that will not parse is owed one answer.
    ``RecursionError`` is not a ``ValueError`` at all: the parser recurses once per nesting level, so a
    body nested past the interpreter's recursion limit would escape every arm that turns a decode
    failure into ``ResponseDecodeError``, and reach the caller outside the ``SdkError`` family. So it is
    refused here as one more ``ValueError``.
    The inverse of :func:`compact_json`, and here for the same reason -- one spelling, every caller.

    Args:
        content: The raw body.

    Returns:
        Whatever the body parses to -- an object, array or scalar.

    Raises:
        ValueError: If the body is not valid JSON, is not decodable at all, or nests deeper than the
            interpreter's recursion limit allows."""
    try:
        return json.loads(content)
    except (json.JSONDecodeError, UnicodeDecodeError) as exc:
        raise ValueError("Response body is not valid JSON") from exc
    except RecursionError as exc:
        raise ValueError("Response body nests too deeply to parse") from exc


def compact_json(value: object, *, ensure_ascii: bool = True) -> str:
    """JSON-encode a structured value with no insignificant whitespace.

    ``ensure_ascii`` defaults on: a header field value is ISO-8859-1 by RFC 9110 and the transport
    rejects anything outside it, so a header, a path segment or a multipart text part keeps every
    non-ASCII character escaped. A JSON *body* passes ``False`` and goes out as UTF-8 -- the bytes
    httpx's own encoder produced before a body carried its own, so the wire did not change.
    ``allow_nan`` is turned off: at its default a non-finite float encodes as ``Infinity`` or
    ``NaN`` -- a Python dialect no RFC 8259 parser accepts -- so the call would fail server-side,
    far from the line that produced the value.

    Args:
        value: The structured value to encode.
        ensure_ascii: Whether non-ASCII characters are escaped; off for a body, on everywhere else.

    Returns:
        Its JSON text with no insignificant whitespace.

    Raises:
        ValueError: If ``value`` holds a non-finite float, which has no RFC 8259 spelling."""
    return json.dumps(value, separators=(",", ":"), ensure_ascii=ensure_ascii, allow_nan=False)


def is_collection(value: object) -> TypeGuard[Iterable[object]]:
    """True for an iterable that should expand into several wire values.

    ``TypeGuard``, deliberately not the newer ``TypeIs``: ``TypeIs`` also narrows the *negative*
    branch, which would be unsound here -- ``str`` is ``Iterable`` yet this returns ``False`` for
    it, so a checker told "not an ``Iterable``" would wrongly rule out strings. ``TypeGuard``
    narrows only where this returns ``True``, which is exactly what the caller needs to iterate.

    Args:
        value: The dumped value to classify.

    Returns:
        ``True`` for an iterable that expands into several wire values -- a ``str``, ``bytes`` or
        ``Mapping`` is one value, not several."""
    return isinstance(value, Iterable) and not isinstance(value, (str, bytes, Mapping))
