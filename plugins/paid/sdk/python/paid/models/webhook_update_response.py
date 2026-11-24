from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.webhook_delivery_status import WebhookDeliveryStatusOrStr
from .enums.webhook_update_response_name import WebhookUpdateResponseNameOrStr


class WebhookUpdateResponse(SdkBaseModel):
    id: str
    name: WebhookUpdateResponseNameOrStr
    description: str
    enabled: bool
    url: str | None
    last_sent_at: RFC3339DateTime | None = Field(alias="lastSentAt")
    last_status: WebhookDeliveryStatusOrStr = Field(alias="lastStatus")
    signing_secret: Optional[str] = Field(default=UNSET, alias="signingSecret")
    """Included on the response of the first save that produced a signing key for this organization (when no webhook had
    a key yet). Store it now — subsequent reads will not return it; rotate to mint a new one if you lose it."""


class WebhookUpdateResponseDict(TypedDict):
    id: str
    name: WebhookUpdateResponseNameOrStr
    description: str
    enabled: bool
    url: str | None
    last_sent_at: RFC3339DateTime | None
    last_status: WebhookDeliveryStatusOrStr
    signing_secret: NotRequired[str]
