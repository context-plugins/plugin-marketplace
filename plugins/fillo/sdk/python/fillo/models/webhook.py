from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.authentication1 import Authentication1OrStr


class Webhook(SdkBaseModel):
    id: str
    url: str
    events: list[str]
    """Delivered event types, e.g. response.created and optionally draft.abandoned."""

    authentication: Authentication1OrStr
    """Configured receiver-authentication mode. The credential is never returned."""

    created_at: RFC3339DateTime = Field(alias="createdAt")


class WebhookDict(TypedDict):
    id: str
    url: str
    events: list[str]
    authentication: Authentication1OrStr
    created_at: RFC3339DateTime
