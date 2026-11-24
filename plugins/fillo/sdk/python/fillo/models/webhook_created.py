from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.authentication import AuthenticationOrStr


class WebhookCreated(SdkBaseModel):
    id: str
    url: str
    events: list[str]
    authentication: AuthenticationOrStr
    """Configured receiver-authentication mode."""

    secret: str
    """The HMAC signing secret. Shown once, never retrievable again."""


class WebhookCreatedDict(TypedDict):
    id: str
    url: str
    events: list[str]
    authentication: AuthenticationOrStr
    secret: str
