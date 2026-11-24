from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.webhook_event_type import WebhookEventTypeOrStr


class WebhookEvent(SdkBaseModel):
    """The body of a webhook delivery. Events carry IDs, not full objects; retries keep the same ``id``."""

    id: str
    """Event ID (``evt_…``). De-duplicate by it."""

    type_: WebhookEventTypeOrStr = Field(alias="type")
    created_at: RFC3339DateTime
    """When the event happened."""

    data: Any


class WebhookEventDict(TypedDict):
    id: str
    type_: WebhookEventTypeOrStr
    created_at: RFC3339DateTime
    data: Any
