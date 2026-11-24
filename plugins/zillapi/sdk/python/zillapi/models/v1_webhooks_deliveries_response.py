from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_delivery import WebhookDelivery, WebhookDeliveryDict


class V1WebhooksDeliveriesResponse(SdkBaseModel):
    data: Optional[list[WebhookDelivery]] = UNSET
    request_id: Optional[str] = UNSET


class V1WebhooksDeliveriesResponseDict(TypedDict):
    data: NotRequired[list[WebhookDeliveryDict]]
    request_id: NotRequired[str]
