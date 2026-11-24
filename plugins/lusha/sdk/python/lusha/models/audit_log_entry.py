from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status_lusha_webhooks_api import StatusLushaWebhooksApiOrStr


class AuditLogEntry(SdkBaseModel):
    id: str
    subscription_id: str = Field(alias="subscriptionId")
    payload_id: str = Field(alias="payloadId")
    status: StatusLushaWebhooksApiOrStr
    status_code: Optional[int] = Field(default=UNSET, alias="statusCode")
    url: str
    delivered_at: RFC3339DateTime = Field(alias="deliveredAt")
    duration_ms: Optional[int] = Field(default=UNSET, alias="durationMs")
    error: OptionalNullable[str] = UNSET


class AuditLogEntryDict(TypedDict):
    id: str
    subscription_id: str
    payload_id: str
    status: StatusLushaWebhooksApiOrStr
    status_code: NotRequired[int]
    url: str
    delivered_at: RFC3339DateTime
    duration_ms: NotRequired[int]
    error: NotRequired[str | None]
