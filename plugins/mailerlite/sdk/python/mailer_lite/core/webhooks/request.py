"""An inbound delivery as the runtime reads it: the exact body bytes and the headers.

Framework-agnostic on purpose. Every Python web framework hands over the raw body as ``bytes`` -- Flask's
``request.get_data()``, Django's ``request.body``, Starlette's ``await request.body()`` -- and its headers as a
mapping or as name/value pairs, so the constructor takes exactly that and nothing framework-shaped: the body as
``bytes`` where it is already buffered, or as a binary reader where it is still to be read. The body is never
decoded: a signature is over bytes, and a decode/re-encode round trip is how a correct signature fails for the
wrong reason."""

from __future__ import annotations

from collections.abc import Iterable, Mapping
from dataclasses import dataclass

from .._internal.wire import parse_json
from ..files import BinaryReader


@dataclass(frozen=True, slots=True, init=False)
class WebhookRequest:
    """One delivery's body and headers.

    The constructor is the one way to build it, and does the normalizing."""

    body: bytes

    headers: Mapping[str, str]
    """Lowercased names. A field sent more than once is one value, its values comma-joined in order (RFC 9110
    §5.3) -- so a rotation header split by a proxy still yields every signature, and a repeated timestamp fails
    closed rather than one copy winning. Read with the name lowercased: ``request.headers.get("x-event-type")``."""

    def __init__(self, *, body: bytes | BinaryReader, headers: Mapping[str, str] | Iterable[tuple[str, str]]) -> None:
        """Snapshot a delivery, normalizing its headers.

        Args:
            body: The request body exactly as received, never decoded: the bytes a framework has buffered, or a
                binary stream (a WSGI ``wsgi.input``, a file object), read to its end from where it stands and
                never rewound.
            headers: A mapping, or name/value pairs (``request.headers.items()``), which is the spelling that keeps
                a repeated field's every value."""
        joined_headers: dict[str, str] = {}
        for name, value in headers.items() if isinstance(headers, Mapping) else headers:
            key = name.lower()
            joined_headers[key] = f"{joined_headers[key]},{value}" if key in joined_headers else value
        object.__setattr__(self, "body", body if isinstance(body, bytes) else body.read())
        object.__setattr__(self, "headers", joined_headers)

    def __repr__(self) -> str:
        """The body's size and the header names, never a value: a delivery carries its signature, and often a
        credential, in its headers and personal data in its body."""
        return f"{type(self).__name__}(body=<{len(self.body)} bytes>, headers={sorted(self.headers)})"


def event_type_from_body(request_body: bytes, discriminator: str) -> str:
    """Read a delivery's event type from its JSON body.

    What a generated ``parse_<group>_event`` calls where the spec's ``propertyPointer`` is
    ``$request.body#/<name>``. The body is parsed here only to find the type; the model the type selects
    validates the bytes again, so nothing parsed leaves this function.

    Args:
        request_body: The delivery's body, as received.
        discriminator: The top-level property carrying the event type, as the wire spells it.

    Returns:
        The event type.

    Raises:
        ValueError: If the body is not JSON, or the property is absent or not a string."""
    try:
        parsed_body = parse_json(request_body)
    except ValueError as error:
        # parse_json words its failure for an HTTP response; this body is an inbound delivery's.
        raise ValueError("Event body is not valid JSON.") from error
    event_type = parsed_body.get(discriminator)
    if not isinstance(event_type, str):
        raise ValueError(f"Event payload carries no event type: it has no string {discriminator!r} property.")
    return event_type


def event_type_from_header(headers: Mapping[str, str], discriminator: str) -> str:
    """Read a delivery's event type from a header.

    What a generated ``parse_<group>_event`` calls where the spec's ``propertyPointer`` is
    ``$request.header.<Name>``.

    Args:
        headers: The delivery's headers, as :class:`WebhookRequest` holds them: names lowercased.
        discriminator: The header carrying the event type, in any casing.

    Returns:
        The event type.

    Raises:
        ValueError: If the header is absent."""
    event_type = headers.get(discriminator.lower())
    if not isinstance(event_type, str):
        raise ValueError(f"Request headers carry no event type: the {discriminator} header is absent.")
    return event_type
