from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event_type import EventTypeOrStr


class Webhook(SdkBaseModel):
    """Webhooks for Task Runs."""

    url: str
    """URL for the webhook."""

    event_types: Optional[list[EventTypeOrStr]] = UNSET
    """Event types to send the webhook notifications for."""


class WebhookDict(TypedDict):
    url: str
    event_types: NotRequired[list[EventTypeOrStr]]
