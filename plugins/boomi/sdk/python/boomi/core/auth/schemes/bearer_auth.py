"""``http`` / ``bearer`` -- and, on the wire, ``openIdConnect`` too."""

from __future__ import annotations

from dataclasses import dataclass, field

from ...params import param
from ..models import AuthParams


@dataclass(frozen=True, slots=True)
class BearerAuthScheme:
    """``http``/``bearer``: ``Authorization: Bearer <token>``.

    Also the wire form of an ``openIdConnect`` scheme, whose discovery document says how a token is
    obtained but not how it is sent."""

    token: str = field(repr=False)

    def apply(self) -> AuthParams:
        return AuthParams(headers=(param[str]("Authorization", f"Bearer {self.token}"),))
