from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_delivery_result import Clixexternalv1DeliveryResult, Clixexternalv1DeliveryResultDict


class V1SendPushNotificationsResponse(SdkBaseModel):
    """Response schema containing the delivery results for each push notification."""

    delivery_results: Optional[list[Clixexternalv1DeliveryResult]] = UNSET
    """List of delivery results for each push notification."""


class V1SendPushNotificationsResponseDict(TypedDict):
    delivery_results: NotRequired[list[Clixexternalv1DeliveryResultDict]]
