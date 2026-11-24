from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook import Webhook, WebhookDict


class WebhookListResponse(SdkBaseModel):
    data: list[Webhook]
    signing_secret_configured: bool = Field(alias="signingSecretConfigured")
    """True when the organization has generated a webhook signing secret at least once."""


class WebhookListResponseDict(TypedDict):
    data: list[WebhookDict]
    signing_secret_configured: bool
