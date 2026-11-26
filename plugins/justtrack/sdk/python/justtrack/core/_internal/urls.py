"""Turning a :class:`UrlTemplate` plus parameters into a request URL.

Six pure functions. :func:`resolve_params` combines the parameters an API applies to every request
with the ones a single call declares; :func:`render_segments` turns each of those into the URL
segments it contributes, reading its declared type; :func:`build_url` then renders the result, with
server variables filling the base URL's placeholders, path parameters filling the path's, and query
parameters flattened and encoded onto the end; :func:`safe_url` cuts a rendered URL to the call every
result and exception names. Resolution stays separate from
rendering so each can be tested on its own, and none of the six holds state -- there is nothing to
configure, so there is nothing to construct."""

from __future__ import annotations

import re
from collections.abc import Mapping, Sequence
from typing import Any, Final
from urllib.parse import quote, urlencode, urlsplit, urlunsplit

from ..params import Param, UrlTemplate
from .flattening import flatten
from .wire import text_values

_PLACEHOLDER: Final = re.compile(r"\{([^{}]+)\}")


def expand_template(template: str, segments: Mapping[str, tuple[str, ...]]) -> str:
    """Substitute every ``{placeholder}`` in ``template`` from ``segments``.

    Each value is the sequence of *unencoded* members its placeholder expands from. Members are
    percent-encoded with no safe characters and joined with ``,``, so a collection fills one path
    segment rather than several -- OpenAPI's ``style: simple`` with ``explode: false``, the default
    for a path parameter, and the same rule ``headers.py`` applies to a header array.

    Encoding happens per member, *before* the join, which is what keeps the two commas apart: the
    separator is written here and stays literal (a sub-delimiter under RFC 3986), while a comma
    carried by a value is encoded to ``%2C`` along with everything else non-unreserved. A value
    still cannot inject a path separator, for the same reason.

    Any ``{name}`` is a placeholder -- the braces delimit it, so the name is not restricted to word
    characters and a kebab-case or dotted path parameter resolves like any other. A name with no
    segment raises rather than passing through: unencoded braces are not valid in a URL anyway.

    Deciding what a value's members *are* belongs to :func:`render_segments`, which is the only
    thing holding a declared type. This function therefore has one rule rather than four, and both
    the join and the encoding live in exactly one place.

    Args:
        template: The URL or path holding the ``{placeholder}`` tokens.
        segments: Each placeholder name mapped to its unencoded members.

    Returns:
        ``template`` with every placeholder substituted, each member percent-encoded.

    Raises:
        ValueError: If ``template`` is empty, or names a placeholder ``segments`` has no entry
            for."""
    if not template:
        raise ValueError("URL template must not be empty")

    def replace(match: re.Match[str]) -> str:
        key = match.group(1)
        if key not in segments:
            raise ValueError(f"Missing template parameter: {key}")
        return ",".join(quote(segment, safe="") for segment in segments[key])

    return _PLACEHOLDER.sub(replace, template)


def render_segments(params: Sequence[Param[Any]] | None) -> dict[str, tuple[str, ...]]:
    """Render each parameter into the URL segments its ``{placeholder}`` expands to.

    Serves a path parameter and a base URL's server variable alike -- both fill a placeholder and
    both name the type they were declared as, so there is one rule rather than two.

    Members, not finished text: :func:`expand_template` owns the ``,`` join and the
    percent-encoding, so neither is written twice and no value can inject a path separator.

    Args:
        params: The path parameters or server variables; ``None`` is treated as none at all.

    Returns:
        Each parameter's key mapped to the unencoded members its placeholder expands to.

    Raises:
        ValueError: If a parameter contributes no value at all -- a placeholder cannot be left
            unfilled -- or if its value does not match its declared type."""
    rendered: dict[str, tuple[str, ...]] = {}
    for param in params or ():
        segments = text_values(param)
        if not segments:
            raise ValueError(f"URL parameter has no value: {param.key}")
        rendered[param.key] = segments
    return rendered


def urlencode_params(params: Sequence[Param[Any]] | None) -> str:
    """Flatten ``params`` and percent-encode them as ``application/x-www-form-urlencoded`` pairs.

    One encoder for both destinations that carry pairs -- a query string (:func:`build_url`, which
    adds the ``?``) and a form body (``form_body``) -- so one parameter renders to the same bytes
    wherever it goes. Pair order is the parameters' order, a repeated key once per value. Non-ASCII
    text is UTF-8 encoded and then percent-encoded (``urlencode``'s default, and the WHATWG rule),
    so the result is ASCII.

    Args:
        params: The parameters to render; ``None`` is treated as none at all.

    Returns:
        The encoded pairs, empty when nothing was contributed.

    Raises:
        ValueError: If a parameter's value does not match its declared type."""
    return urlencode(flatten(params))


def resolve_params(
    global_params: Sequence[Param[Any]], call_params: Sequence[Param[Any]] | None
) -> tuple[Param[Any], ...]:
    """Return the parameters for one call, the call's winning per key.

    One function for both kinds that need it: a path parameter and a query parameter are the same
    type, so they are the same rule -- a call's parameter replaces a global of the same key but
    keeps the global's position, so what an endpoint produces does not depend on which side supplied
    a parameter. Keys are unique within either side -- a collection is carried by a single
    :class:`Param` and expanded by its destination, never by repeating the key -- so replacing
    rather than appending is unambiguous.

    Both arguments share a type, so the precedence lives in their names rather than in the function
    name: ``global_params`` is what the API prescribes, ``call_params`` what this one call declares.

    Headers resolve separately, since they merge case-insensitively -- which ``render_headers`` gets
    by lowercasing as it renders. Placeholders in a *base URL* are server variables, carried on the
    :class:`UrlTemplate` itself and rendered by :func:`build_url`.

    Args:
        global_params: What the API prescribes for every call.
        call_params: What this one call declares; wins per key.

    Returns:
        The effective parameters, each key once, in the order the global set established."""
    by_key = {param.key: param for param in (*global_params, *(call_params or ()))}
    return tuple(by_key.values())


def build_url(
    url_template: UrlTemplate,
    *,
    path_params: Sequence[Param[Any]] | None = None,
    query_params: Sequence[Param[Any]] | None = None,
) -> str:
    """Resolve ``url_template`` into a complete request URL.

    Args:
        url_template: The unresolved URL, carrying its base URL, path and server variables.
        path_params: The call's path parameters.
        query_params: The call's query parameters.

    Returns:
        The absolute URL, base and path joined on exactly one ``/``, query appended when non-empty.

    Raises:
        ValueError: If a placeholder is unfilled or a parameter's value does not match its
            declared type."""
    base = expand_template(url_template.base_url, render_segments(url_template.variables))
    path = expand_template(url_template.path, render_segments(path_params))

    # Join on exactly one separator. Plain urljoin would be wrong here: it treats the base as a
    # document reference and discards its last path segment, so a base of ".../v2" with path
    # "users" would resolve to ".../users", silently dropping the version.
    url = f"{base.rstrip('/')}/{path.lstrip('/')}"

    query = urlencode_params(query_params)
    return f"{url}?{query}" if query else url


def safe_url(url: str) -> str:
    """The safe form of ``url``: ``scheme://host[:port]/path``, with the userinfo, the query and the fragment dropped.

    What every result and every member of the exception family carries as ``url`` (ADR-0072), so nothing a
    parameter or a scheme places in the query can reach a message or a repr. ``execute`` applies it to the URL
    :func:`build_url` rendered from the template and the endpoint's own parameters; a payload that outlives the
    call -- a :class:`~..file_responses.FileResponse`, an :class:`~..event_streams.EventStream` -- applies it to
    the response's URL, having no template to build from, and so names the call exactly as the result does.

    Args:
        url: A request URL, as built or as a response reports it.

    Returns:
        ``scheme://host[:port]/path``, or ``<unparseable url>`` where ``urlsplit`` refuses."""
    try:
        parts = urlsplit(url)
    except ValueError:
        return "<unparseable url>"
    return urlunsplit(parts._replace(netloc=parts.netloc.rpartition("@")[2], query="", fragment=""))
