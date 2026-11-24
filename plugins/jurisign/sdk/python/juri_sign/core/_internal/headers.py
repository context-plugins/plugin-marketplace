"""Rendering, normalizing and resolving request headers, plus reading response headers.

One place decides how header names reach the wire, so the choice is made once rather than at each
endpoint. Names are lowercased: HTTP/1.1 treats them case-insensitively and HTTP/2 requires
lowercase, so lowercasing is correct for both and makes the produced mapping comparable.

Lowercasing is also what makes :func:`resolve_headers` case-insensitive by construction: once every
layer is normalized, an ordinary dict merge cannot let a differently-cased duplicate through.

The layers are not all the same kind, and that asymmetry is deliberate. The API's and the endpoint's
headers are :class:`Param`s -- spec-derived, so each names the type it was declared as and is
rendered through it by :func:`render_headers`. A caller's ``extra_headers`` arrives as a plain
mapping of strings, because a caller-supplied value carries no declared type for an adapter to act
on.

``Cookie`` is the one field this module knows by name. Every other field takes the later layer and
discards the earlier; RFC 6265 §5.4 permits at most one ``Cookie``, so its contributors fold into a
single jar instead."""

from __future__ import annotations

from collections.abc import Mapping, Sequence
from typing import Any, Final, TypeVar

from pydantic import ValidationError
from typing_extensions import TypeForm

from ..adapters import adapter_for, validation_target
from ..params import Param
from .wire import text_values

T = TypeVar("T")

COOKIE_HEADER: Final = "cookie"
"""The one field name this module knows, lowercased as every rendered name is.

RFC 6265 §5.4 permits a user agent at most one ``Cookie`` field, so two contributors of a cookie are
two entries in one jar rather than two claims on one slot -- the only field where a later layer folds
into an earlier one instead of replacing it."""


def fold_cookie_jars(*jars: str | None) -> str:
    """Join what each layer contributed to the cookie jar, skipping those that contributed nothing.

    Args:
        jars: Each layer's ``Cookie`` field value, in precedence order.

    Returns:
        One RFC 6265 §5.4 field value, empty when no layer contributed a cookie."""
    return "; ".join(jar for jar in jars if jar)


def render_headers(headers: Sequence[Param[Any]] | None) -> dict[str, str]:
    """Render each header parameter into a lowercased name and one field value.

    Rendering and lowercasing in one pass is what keeps :func:`resolve_headers` an ordinary dict
    merge; within one layer the later of two same-named headers wins, which falls out of the dict.
    ``Cookie`` is the exception: its contributors fold into one jar, so an endpoint's own cookie and
    the credential a scheme appended after it survive each other.

    A header contributing nothing -- a ``None`` value, or a collection with no members -- is omitted
    rather than sent empty, so a lower layer's value survives. Several values fold into one
    comma-separated field value: RFC 9110's own rule for a repeated header, and OpenAPI's default
    ``style: simple`` for a header array, with no space after the comma. Folding here is also what
    keeps ``HttpRequest.headers`` a plain ``Mapping[str, str]``, so no transport has to learn that a
    header can be multi-valued.

    Args:
        headers: The header parameters; ``None`` is treated as none at all.

    Returns:
        Lowercased header names mapped to one field value each; a header contributing nothing is
        absent.

    Raises:
        ValueError: If a header's value does not match its declared type, or a flat collection
            holds a ``None``."""
    rendered: dict[str, str] = {}
    for header in headers or ():
        values = text_values(header)
        if values:
            name = header.key.lower()
            field_value = ",".join(values)
            if name == COOKIE_HEADER:
                field_value = fold_cookie_jars(rendered.get(name), field_value)
            rendered[name] = field_value
    return rendered


def normalize_headers(headers: Mapping[str, str] | None) -> dict[str, str]:
    """Return already-string headers as a plain dict with lowercased names.

    One layer reaches :func:`resolve_headers` this way and only one: the caller's ``extra_headers``.
    Every spec-derived layer arrives as a :class:`Param` and goes through :func:`render_headers`.

    Args:
        headers: Already-string headers, typically a caller's ``extra_headers``.

    Returns:
        The same mapping with every name lowercased."""
    return {key.lower(): value for key, value in (headers or {}).items()}


def resolve_headers(
    global_headers: Sequence[Param[Any]],
    local_headers: Sequence[Param[Any]] | None,
    *,
    extra_headers: Mapping[str, str] | None = None,
) -> dict[str, str]:
    """Return the headers for one call: the API's, then the endpoint's, then the caller's.

    Every layer is normalized before merging, so a global ``X-Tenant`` is overridden by an
    endpoint's ``x-tenant`` rather than reaching the wire alongside it -- and a caller's
    ``extra_headers`` wins over both. That it can override a header the endpoint set is the point of
    passing it, not an oversight.

    ``Cookie`` is the one field a later layer does not replace. RFC 6265 §5.4 permits at most one of
    them, so the layers' cookies are several entries in a single jar rather than competing claims on
    one slot: a caller adding a cookie adds to the credential a scheme contributed instead of
    silently discarding it.

    ``extra_headers`` is keyword-only. It no longer shares a type with the two layers below it, so
    an inversion would now be caught -- but it stays keyword-only regardless: the two spec-derived
    layers are still same-typed and positional, and a caller layer reading as a third peer would
    misrepresent it as something the API prescribes.

    Args:
        global_headers: What the API prescribes for every call.
        local_headers: What this one endpoint declares, plus whatever its scheme contributed; wins
            over the API's.
        extra_headers: What the caller passed for this one request; wins over both.

    Returns:
        The effective headers, names lowercased so the merge is case-insensitive.

    Raises:
        ValueError: If a header's value does not match its declared type."""
    normalized_global_headers = render_headers(global_headers)
    normalized_local_headers = render_headers(local_headers)
    normalized_extra_headers = normalize_headers(extra_headers)

    resolved = normalized_global_headers | normalized_local_headers | normalized_extra_headers
    jar = fold_cookie_jars(
        normalized_global_headers.get(COOKIE_HEADER),
        normalized_local_headers.get(COOKIE_HEADER),
        normalized_extra_headers.get(COOKIE_HEADER),
    )
    if jar:
        resolved[COOKIE_HEADER] = jar
    return resolved


def read_header(headers: Mapping[str, str], name: str, declared: TypeForm[T]) -> T | None:
    """Read one response header as its declared type. Paging selectors that read a header use this.

    The value is validated in lax mode, so ``read_header(headers, name, bool)`` accepts ``1``, ``0``,
    ``true`` and ``false`` in any case.

    Args:
        headers: The response headers. Names may be in any case.
        name: The header to read, matched case-insensitively.
        declared: The type to validate the trimmed value into.

    Returns:
        The validated value. ``None`` if the header is missing, blank or fails validation, so a bad header
        from the server never raises in the middle of a walk."""
    text = find_header(headers, name)
    if text is None:
        return None
    try:
        return adapter_for(validation_target(declared)).validate_python(text)
    except ValidationError:
        return None


def find_link_target(headers: Mapping[str, str], *, header_name: str, rel: str) -> str | None:
    """Return the target of the first entry of an RFC 8288 link header whose ``rel`` includes ``rel``.

    The header is the one the operation's pointer names, ``Link`` when the API follows RFC 8288 to the letter.
    Entries are split on commas outside quotes, and parameters on semicolons outside quotes. ``rel`` is
    matched case-insensitively against each entry's space-separated ``rel`` list. Backslash escapes inside
    quotes are not unescaped. ``header_name`` and ``rel`` are keyword-only: both are strings, so a swap would
    otherwise type-check.

    Args:
        headers: The response headers. Names may be in any case.
        header_name: The header to read, matched case-insensitively.
        rel: The relation to find, such as ``"next"``.

    Returns:
        The target as written. ``None`` if the header is missing or blank, no entry has that ``rel``, or a
        ``<`` has no closing ``>``."""
    value = find_header(headers, header_name)
    if value is None:
        return None
    index = 0
    while (index := value.find("<", index)) >= 0:
        target_end = value.find(">", index + 1)
        if target_end < 0:
            return None
        target = value[index + 1 : target_end]
        parameters_end = _find_unquoted(value, ",", target_end + 1)
        if _rel_matches(value[target_end + 1 : parameters_end], rel):
            return target
        index = parameters_end
    return None


def find_header(headers: Mapping[str, str], name: str) -> str | None:
    """Return the trimmed value of the first header named ``name``, matched case-insensitively.

    A blank value counts as missing and returns ``None``. Used by :func:`read_header`,
    :func:`find_link_target` and ``retries.retry_after_seconds``."""
    value = next(
        (field_value for field_name, field_value in headers.items() if field_name.lower() == name.lower()), None
    )
    if value is None:
        return None
    text = value.strip()
    return text if text else None


def _find_unquoted(text: str, delimiter: str, start: int) -> int:
    in_quotes = False
    for i in range(start, len(text)):
        if text[i] == '"':
            in_quotes = not in_quotes
        elif text[i] == delimiter and not in_quotes:
            return i
    return len(text)


def _rel_matches(parameters: str, rel: str) -> bool:
    start = 0
    while start < len(parameters):
        end = _find_unquoted(parameters, ";", start)
        parameter = parameters[start:end]
        start = end + 1
        name, separator, value = parameter.partition("=")
        if not separator or name.strip().lower() != "rel":
            continue
        return any(rel_type.lower() == rel.lower() for rel_type in value.strip().strip('"').split(" "))
    return False
