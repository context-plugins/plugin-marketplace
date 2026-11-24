from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.webhook_delivery_status import WebhookDeliveryStatusOrStr
from .enums.webhook_name import WebhookNameOrStr


class Webhook(SdkBaseModel):
    id: str
    name: WebhookNameOrStr
    description: str
    enabled: bool
    url: str | None
    last_sent_at: RFC3339DateTime | None = Field(alias="lastSentAt")
    last_status: WebhookDeliveryStatusOrStr = Field(alias="lastStatus")


class WebhookDict(TypedDict):
    id: str
    name: WebhookNameOrStr
    description: str
    enabled: bool
    url: str | None
    last_sent_at: RFC3339DateTime | None
    last_status: WebhookDeliveryStatusOrStr
