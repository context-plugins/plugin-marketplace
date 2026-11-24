from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_disputes_api import Entity1RazorpayDisputesApiOrStr
from .refund_razorpay_refunds_api import RefundRazorpayRefundsApi, RefundRazorpayRefundsApiDict


class PaymentsRefundsResponse(SdkBaseModel):
    entity: Optional[Entity1RazorpayDisputesApiOrStr] = UNSET
    count: Optional[int] = UNSET
    """Number of items in the current page."""

    items: Optional[list[RefundRazorpayRefundsApi]] = UNSET


class PaymentsRefundsResponseDict(TypedDict):
    entity: NotRequired[Entity1RazorpayDisputesApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[RefundRazorpayRefundsApiDict]]
