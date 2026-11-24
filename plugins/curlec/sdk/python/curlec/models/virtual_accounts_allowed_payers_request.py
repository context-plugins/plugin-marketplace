from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_account import BankAccount, BankAccountDict
from .enums.type2_razorpay_virtual_accounts_api import Type2RazorpayVirtualAccountsApiOrStr
from .vpa import Vpa, VpaDict


class VirtualAccountsAllowedPayersRequest(SdkBaseModel):
    type_: Type2RazorpayVirtualAccountsApiOrStr = Field(alias="type")
    """Type of allowed payer."""

    bank_account: Optional[BankAccount] = UNSET
    """Required if type=bank_account."""

    vpa: Optional[Vpa] = UNSET
    """Required if type=vpa."""


class VirtualAccountsAllowedPayersRequestDict(TypedDict):
    type_: Type2RazorpayVirtualAccountsApiOrStr
    bank_account: NotRequired[BankAccountDict]
    vpa: NotRequired[VpaDict]
