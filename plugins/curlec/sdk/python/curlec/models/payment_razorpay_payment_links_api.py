from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.method_razorpay_payment_links_api import MethodRazorpayPaymentLinksApiOrStr
from .enums.status1_razorpay_payment_links_api import Status1RazorpayPaymentLinksApiOrStr


class PaymentRazorpayPaymentLinksApi(SdkBaseModel):
    amount: Optional[int] = UNSET
    payment_id: Optional[str] = UNSET
    plink_id: Optional[str] = UNSET
    method: Optional[MethodRazorpayPaymentLinksApiOrStr] = UNSET
    status: Optional[Status1RazorpayPaymentLinksApiOrStr] = UNSET
    created_at: Optional[int] = UNSET
    updated_at: Optional[int] = UNSET


class PaymentRazorpayPaymentLinksApiDict(TypedDict):
    amount: NotRequired[int]
    payment_id: NotRequired[str]
    plink_id: NotRequired[str]
    method: NotRequired[MethodRazorpayPaymentLinksApiOrStr]
    status: NotRequired[Status1RazorpayPaymentLinksApiOrStr]
    created_at: NotRequired[int]
    updated_at: NotRequired[int]
