from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_disputes_api import Entity1RazorpayDisputesApiOrStr
from .payment_downtime import PaymentDowntime, PaymentDowntimeDict


class PaymentsDowntimesResponse(SdkBaseModel):
    entity: Optional[Entity1RazorpayDisputesApiOrStr] = UNSET
    count: Optional[int] = UNSET
    """Number of items in the current page."""

    items: Optional[list[PaymentDowntime]] = UNSET


class PaymentsDowntimesResponseDict(TypedDict):
    entity: NotRequired[Entity1RazorpayDisputesApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[PaymentDowntimeDict]]
