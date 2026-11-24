from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_razorpay_partner_accounts_api import Status1RazorpayPartnerAccountsApiOrStr


class V2AccountsResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    status: Optional[Status1RazorpayPartnerAccountsApiOrStr] = UNSET
    suspended_at: Optional[int] = UNSET


class V2AccountsResponseDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[Status1RazorpayPartnerAccountsApiOrStr]
    suspended_at: NotRequired[int]
