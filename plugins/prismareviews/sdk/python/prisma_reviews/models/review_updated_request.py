from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .data import Data, DataDict
from .enums.webhook_event_type import WebhookEventTypeOrStr


class ReviewUpdatedRequest(SdkBaseModel):
    id: str
    """Event ID (``evt_…``). De-duplicate by it."""

    type_: WebhookEventTypeOrStr = Field(alias="type")
    created_at: RFC3339DateTime
    """When the event happened."""

    data: Data


class ReviewUpdatedRequestDict(TypedDict):
    id: str
    type_: WebhookEventTypeOrStr
    created_at: RFC3339DateTime
    data: DataDict
