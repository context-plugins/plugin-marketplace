"""``apiKey`` -- one credential, three destinations.

OpenAPI's ``apiKey`` is a single type parameterised by ``in:``, so the three classes below differ
only in which bucket of :class:`AuthParams` they fill."""

from __future__ import annotations

from dataclasses import dataclass, field

from ...params import param
from ..models import AuthParams


@dataclass(frozen=True, slots=True)
class ApiKeyHeaderScheme:
    """``apiKey`` with ``in: header``.

    Also every custom ``Authorization`` keyword an API invents, which needs no scheme of its own:
    pass ``name="Authorization"`` and a value that already carries the keyword."""

    name: str
    value: str = field(repr=False)

    def apply(self) -> AuthParams:
        return AuthParams(headers=(param[str](self.name, self.value),))


@dataclass(frozen=True, slots=True)
class ApiKeyQueryScheme:
    """``apiKey`` with ``in: query``.

    The value is percent-encoded, because :class:`Param` renders it exactly as an endpoint's own
    query parameter -- the opposite obligation from the cookie below."""

    name: str
    value: str = field(repr=False)

    def apply(self) -> AuthParams:
        return AuthParams(query_params=(param[str](self.name, self.value),))


@dataclass(frozen=True, slots=True)
class ApiKeyCookieScheme:
    """``apiKey`` with ``in: cookie``.

    The value is sent verbatim. RFC 6265's ``cookie-value`` alphabet already admits every character
    a base64 key uses, so percent-encoding it would corrupt the credential rather than protect it."""

    name: str
    value: str = field(repr=False)

    def apply(self) -> AuthParams:
        return AuthParams(cookies=(param[str](self.name, self.value),))
