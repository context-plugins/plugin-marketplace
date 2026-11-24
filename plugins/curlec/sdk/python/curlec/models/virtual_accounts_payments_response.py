from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_razorpay_virtual_accounts_api import (
    PaymentRazorpayVirtualAccountsApi,
    PaymentRazorpayVirtualAccountsApiDict,
)


class VirtualAccountsPaymentsResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[PaymentRazorpayVirtualAccountsApi]] = UNSET


class VirtualAccountsPaymentsResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[PaymentRazorpayVirtualAccountsApiDict]]
