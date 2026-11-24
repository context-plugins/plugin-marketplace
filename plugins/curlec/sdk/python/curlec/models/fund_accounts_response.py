from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_disputes_api import Entity1RazorpayDisputesApiOrStr
from .fund_account_razorpay_x_fund_accounts_api import (
    FundAccountRazorpayXFundAccountsApi,
    FundAccountRazorpayXFundAccountsApiDict,
)


class FundAccountsResponse(SdkBaseModel):
    entity: Optional[Entity1RazorpayDisputesApiOrStr] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[FundAccountRazorpayXFundAccountsApi]] = UNSET


class FundAccountsResponseDict(TypedDict):
    entity: NotRequired[Entity1RazorpayDisputesApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[FundAccountRazorpayXFundAccountsApiDict]]
