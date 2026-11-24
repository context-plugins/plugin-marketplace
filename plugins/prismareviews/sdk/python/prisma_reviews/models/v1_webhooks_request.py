from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.webhook_event_filter import WebhookEventFilterOrStr


class V1WebhooksRequest(SdkBaseModel):
    url: str
    """Your endpoint. Must start with ``https://``."""

    events: Optional[list[WebhookEventFilterOrStr]] = UNSET
    """Event types to receive, or ``["*"]`` for all of them (the default)."""


class V1WebhooksRequestDict(TypedDict):
    url: str
    events: NotRequired[list[WebhookEventFilterOrStr]]
