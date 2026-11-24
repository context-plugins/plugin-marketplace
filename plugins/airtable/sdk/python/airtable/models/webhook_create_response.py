from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class WebhookCreateResponse(SdkBaseModel):
    """Response after creating a new webhook, including the MAC secret."""

    id: str
    """The unique identifier of the newly created webhook."""

    mac_secret_base64: str = Field(alias="macSecretBase64")
    """The Base64-encoded MAC secret used to verify the authenticity of webhook notification payloads."""

    expiration_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expirationTime")
    """The time when the webhook will expire if not refreshed."""


class WebhookCreateResponseDict(TypedDict):
    id: str
    mac_secret_base64: str
    expiration_time: NotRequired[RFC3339DateTime]
