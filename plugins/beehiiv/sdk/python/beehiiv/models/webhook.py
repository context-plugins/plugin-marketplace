from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.webhook_event_type import WebhookEventTypeOrStr


class Webhook(SdkBaseModel):
    id: str
    """The prefixed ID for the webhook."""

    url: str
    """The webhook URL to send events to."""

    created: int
    """The date the webhook was created. Measured in seconds since the Unix epoch."""

    updated: int
    """The date the webhook was last updated. Measured in seconds since the Unix epoch."""

    event_types: list[WebhookEventTypeOrStr]
    """The types of events the webhook will receive."""

    description: str
    """The user-defined description for the webhook."""


class WebhookDict(TypedDict):
    id: str
    url: str
    created: int
    updated: int
    event_types: list[WebhookEventTypeOrStr]
    description: str
