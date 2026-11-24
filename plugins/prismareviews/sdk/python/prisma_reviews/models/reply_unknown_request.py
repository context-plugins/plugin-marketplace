from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .data4 import Data4, Data4Dict
from .enums.webhook_event_type import WebhookEventTypeOrStr


class ReplyUnknownRequest(SdkBaseModel):
    id: str
    """Event ID (``evt_…``). De-duplicate by it."""

    type_: WebhookEventTypeOrStr = Field(alias="type")
    created_at: RFC3339DateTime
    """When the event happened."""

    data: Data4


class ReplyUnknownRequestDict(TypedDict):
    id: str
    type_: WebhookEventTypeOrStr
    created_at: RFC3339DateTime
    data: Data4Dict
