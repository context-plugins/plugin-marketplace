from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event_type4 import EventType4OrStr


class MonitorWebhook(SdkBaseModel):
    """Webhook configuration for a monitor."""

    url: str
    """URL for the webhook."""

    event_types: Optional[list[EventType4OrStr]] = UNSET
    """Event types to send the webhook notifications for."""


class MonitorWebhookDict(TypedDict):
    url: str
    event_types: NotRequired[list[EventType4OrStr]]
