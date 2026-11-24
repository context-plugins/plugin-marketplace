from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_delivery_result_additional_params2 import (
    Clixexternalv1DeliveryResultAdditionalParams2,
    Clixexternalv1DeliveryResultAdditionalParams2Dict,
)
from .enums.clixexternalv1_delivery_result_status2 import Clixexternalv1DeliveryResultStatus2OrStr


class Clixexternalv1DeliveryResult(SdkBaseModel):
    """Result of a push notification delivery attempt."""

    message_id: Optional[str] = UNSET
    """Unique ID of the push notification message."""

    status: Optional[Clixexternalv1DeliveryResultStatus2OrStr] = UNSET
    """Delivery status of the push notification."""

    additional_params: Optional[Clixexternalv1DeliveryResultAdditionalParams2] = UNSET
    """Additional parameters related to the delivery result."""


class Clixexternalv1DeliveryResultDict(TypedDict):
    message_id: NotRequired[str]
    status: NotRequired[Clixexternalv1DeliveryResultStatus2OrStr]
    additional_params: NotRequired[Clixexternalv1DeliveryResultAdditionalParams2Dict]
