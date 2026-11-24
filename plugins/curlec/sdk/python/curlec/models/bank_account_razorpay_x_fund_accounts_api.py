from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BankAccountRazorpayXFundAccountsApi(SdkBaseModel):
    ifsc: Optional[str] = UNSET
    bank_name: Optional[str] = UNSET
    name: Optional[str] = UNSET
    account_number: Optional[str] = UNSET


class BankAccountRazorpayXFundAccountsApiDict(TypedDict):
    ifsc: NotRequired[str]
    bank_name: NotRequired[str]
    name: NotRequired[str]
    account_number: NotRequired[str]
