from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.webhook_event_filter import WebhookEventFilterOrStr


class WebhookCreated(SdkBaseModel):
    id: str
    """Webhook endpoint ID (``we_…``)."""

    url: str
    """The endpoint."""

    events: list[WebhookEventFilterOrStr]
    secret: str
    """Signing secret (``whsec_…``). Shown only in this response."""

    created_at: RFC3339DateTime
    """When it was registered."""


class WebhookCreatedDict(TypedDict):
    id: str
    url: str
    events: list[WebhookEventFilterOrStr]
    secret: str
    created_at: RFC3339DateTime
