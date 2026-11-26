"""Masking, for what the runtime prints: header values, URLs and form fields.

The rule is vocabulary knowability: a value is shown only when its name is known-safe, so a credential
under a name nobody predicted is hidden by default. Every denylist in the research leaked
in a real run; the allowlist is the one rule that held. A form body is the one denylist: it prints only on
the caller's opt-in, and no vocabulary of safe form keys exists, so there only the names ``mask_keys`` lists
are hidden. Stdlib-only on purpose: ``transport.py`` imports this module for ``HttpRequest.__repr__``, and
``logging.py`` imports ``transport.py``."""

from __future__ import annotations

from collections.abc import Mapping
from collections.abc import Set as AbstractSet
from typing import Final
from urllib.parse import unquote_plus, urlsplit, urlunsplit

DEFAULT_PLACEHOLDER: Final = "REDACTED"
"""What a hidden value prints as unless ``LoggingOptions.redaction_placeholder`` says otherwise -- the OpenTelemetry
semantic conventions' word for one (ADR-0070, rule 4). A repr and an abandonment warning, which read no options,
always print this one."""

SAFE_HEADERS: Final = frozenset(
    {
        "accept",
        "accept-charset",
        "accept-encoding",
        "accept-language",
        "accept-ranges",
        "age",
        "allow",
        "cache-control",
        "connection",
        "content-disposition",
        "content-encoding",
        "content-language",
        "content-length",
        "content-md5",
        "content-range",
        "content-type",
        "date",
        "etag",
        "expect",
        "expires",
        "host",
        "idempotency-key",
        "if-match",
        "if-modified-since",
        "if-none-match",
        "if-range",
        "if-unmodified-since",
        "keep-alive",
        "last-modified",
        "max-forwards",
        "origin",
        "pragma",
        "range",
        "ratelimit-limit",
        "ratelimit-policy",
        "ratelimit-remaining",
        "ratelimit-reset",
        "request-id",
        "retry-after",
        "server",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "user-agent",
        "vary",
        "via",
        "warning",
        "www-authenticate",
        # W3C trace context
        "traceparent",
        "tracestate",
        # correlation and rate-limit headers outside the standards
        "x-correlation-id",
        "x-ratelimit-limit",
        "x-ratelimit-remaining",
        "x-ratelimit-reset",
        "x-request-id",
        # the runtime's own identification headers (ADR-0045)
        "x-apimatic-lang",
        "x-apimatic-package-version",
        "x-apimatic-gen-version",
        "x-apimatic-os",
        "x-apimatic-runtime",
    }
)
"""The 61 header names whose values may be printed: the standard request and response headers that carry no
credential, lowercased."""

SAFE_QUERY_KEYS: Final = frozenset(
    {"cursor", "dates", "datetime", "limit", "offset", "page", "since", "size", "strings"}
)
"""The nine query keys whose values may be printed: a fixed vocabulary of paging and filter names, as ``SAFE_HEADERS``
is for headers, the same in every SDK this runtime is vendored into and never derived from a spec. A key an endpoint
declares but the vocabulary lacks is masked like any other -- the safe direction."""


def redact_headers(
    headers: Mapping[str, str], *, unmask: AbstractSet[str], mask: AbstractSet[str], placeholder: str
) -> dict[str, str]:
    """``headers`` with every value replaced by ``placeholder`` unless its name may be shown.

    Precedence: ``unmask`` wins, then ``mask``, then the safe list, then the placeholder. Names
    are compared as given: the runtime lowercases every header name as it resolves it, and the option
    sets are lowercased once at the client, so a name that arrives otherwise is masked -- the safe
    direction.

    Args:
        headers: The headers to describe, names lowercased by the layer that resolved them.
        unmask: Names to show regardless of the safe list.
        mask: Names to hide regardless of the safe list.
        placeholder: What a hidden value prints as -- the client's ``redaction_placeholder``.

    Returns:
        The same names in the same order, each value shown or ``placeholder``."""
    return {
        name: value if name in unmask or (name not in mask and name in SAFE_HEADERS) else placeholder
        for name, value in headers.items()
    }


def redact_query(query: str, *, mask_keys: AbstractSet[str], placeholder: str) -> str:
    """``key=value&...`` with every value replaced by ``placeholder`` unless its key may be shown.

    A value is shown only when its key is in ``SAFE_QUERY_KEYS`` and not in ``mask_keys``: unknown means
    hidden, the header rule again, so a credential's key -- never a paging name -- is masked without a
    list naming it. A key is matched by its :func:`base_name`, once unquoted, so the keys a collection
    explodes into (``strings[0]``, ``strings[]``, ``dates[0]``) answer to the ``strings`` the vocabulary
    holds, and ``PAGE`` answers to ``page``. Keys are never rewritten; a pair without ``=`` and an empty
    pair are left as they are.

    Args:
        query: The encoded pairs, without the leading ``?``.
        mask_keys: Lowercased names whose values are hidden even when known-safe.
        placeholder: What a hidden value prints as.

    Returns:
        The pairs in their order, each value shown or ``placeholder``."""
    redacted_pairs: list[str] = []
    for pair in query.split("&"):
        key, separator, _ = pair.partition("=")
        name = base_name(unquote_plus(key))
        redacted_pairs.append(
            f"{key}={placeholder}" if separator and (name in mask_keys or name not in SAFE_QUERY_KEYS) else pair
        )
    return "&".join(redacted_pairs)


def redact_form(form: bytes, *, mask_keys: AbstractSet[str], placeholder: str) -> bytes:
    """A form body's bytes with the value of every key ``mask_keys`` names replaced by ``placeholder``.

    The form-body rule: the walk :func:`redact_query` makes, over the bytes the body carries and with the
    opposite list -- every value is shown unless its key is named. A key is matched by its :func:`base_name`,
    once unquoted, as there, so the ``password[0]`` this runtime's INDEXED format writes answers to
    ``password``, and a key nested in a map answers to its outer name. Keys are never rewritten; a pair
    without ``=`` and an empty pair are left as they are. Only a key is decoded, to read its name; the body
    itself is never decoded here.

    Args:
        form: The encoded pairs of an ``application/x-www-form-urlencoded`` body.
        mask_keys: Lowercased names whose values are hidden.
        placeholder: What a hidden value prints as; it is written as UTF-8.

    Returns:
        The pairs in their order, each value kept or replaced by ``placeholder``."""
    placeholder_bytes = placeholder.encode("utf-8")
    redacted_pairs: list[bytes] = []
    for pair in form.split(b"&"):
        key, separator, _ = pair.partition(b"=")
        name = base_name(unquote_plus(key.decode("utf-8", errors="replace")))
        redacted_pairs.append(key + b"=" + placeholder_bytes if separator and name in mask_keys else pair)
    return b"&".join(redacted_pairs)


def redact_url(url: str, *, mask_keys: AbstractSet[str] = frozenset(), placeholder: str = DEFAULT_PLACEHOLDER) -> str:
    """The form of ``url`` that may be printed: userinfo dropped, query values masked, keys kept.

    The one printable-URL rule, for a log line, a repr and the abandonment warnings alike. The query
    goes through :func:`redact_query`; the defaults are the form a repr or a warning uses, having no
    options to read, and print what a client with default options logs, since no known-safe key is
    among the default ``mask_keys``. Total: a URL the parser refuses is described rather than raised
    on, since this runs inside a log call and a finalizer.

    Args:
        url: The URL to describe.
        mask_keys: Query keys whose values are hidden even when known-safe.
        placeholder: What a hidden value prints as.

    Returns:
        ``scheme://host[:port]/path[?masked query][#fragment]``, or ``<unparseable url>``."""
    try:
        parts = urlsplit(url)
    except ValueError:
        return "<unparseable url>"
    query = redact_query(parts.query, mask_keys=mask_keys, placeholder=placeholder) if parts.query else ""
    return urlunsplit(parts._replace(netloc=parts.netloc.rpartition("@")[2], query=query))


def base_name(key: str) -> str:
    """The name ``mask_keys`` and ``SAFE_QUERY_KEYS`` match ``key`` by: cut before the first ``[``, lowercased.

    So the keys a collection explodes into (``strings[0]``, ``strings[]``) and a key nested in a map
    (``filter[name]``) answer to their outer name, and ``PAGE`` answers to ``page``. A query or form key is
    unquoted before it comes here; a multipart field name is not, since it is never percent-encoded."""
    return key.partition("[")[0].lower()
