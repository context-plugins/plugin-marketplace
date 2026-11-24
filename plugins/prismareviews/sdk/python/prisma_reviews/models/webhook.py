from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.webhook_event_filter import WebhookEventFilterOrStr


class Webhook(SdkBaseModel):
    id: str
    """Webhook endpoint ID (``we_…``)."""

    url: str
    """The endpoint."""

    events: list[WebhookEventFilterOrStr]
    active: bool
    """Whether it receives deliveries."""

    created_at: RFC3339DateTime
    """When it was registered."""


class WebhookDict(TypedDict):
    id: str
    url: str
    events: list[WebhookEventFilterOrStr]
    active: bool
    created_at: RFC3339DateTime
