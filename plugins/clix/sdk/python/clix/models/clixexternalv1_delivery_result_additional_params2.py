from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Clixexternalv1DeliveryResultAdditionalParams2(SdkBaseModel):
    """Additional parameters related to the delivery result."""

    device_id: Optional[str] = UNSET
    fcm_message_id: Optional[str] = UNSET
    failure_reason: Optional[str] = UNSET


class Clixexternalv1DeliveryResultAdditionalParams2Dict(TypedDict):
    device_id: NotRequired[str]
    fcm_message_id: NotRequired[str]
    failure_reason: NotRequired[str]
