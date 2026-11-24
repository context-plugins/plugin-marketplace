from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CustomViewEmbedTokenResponse(SdkBaseModel):
    token: str
    """Short-lived signed token to pass to the embed SDK."""

    expires_at: RFC3339DateTime = Field(alias="expiresAt")
    """When the token expires (ISO 8601)."""


class CustomViewEmbedTokenResponseDict(TypedDict):
    token: str
    expires_at: RFC3339DateTime
