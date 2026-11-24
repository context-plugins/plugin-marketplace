from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_disputes_api import Entity1RazorpayDisputesApiOrStr
from .fund_account_validation import FundAccountValidation, FundAccountValidationDict


class FundAccountsValidationsResponse(SdkBaseModel):
    entity: Optional[Entity1RazorpayDisputesApiOrStr] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[FundAccountValidation]] = UNSET


class FundAccountsValidationsResponseDict(TypedDict):
    entity: NotRequired[Entity1RazorpayDisputesApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[FundAccountValidationDict]]
