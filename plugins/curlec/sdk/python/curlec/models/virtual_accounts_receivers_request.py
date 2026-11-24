from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1_razorpay_virtual_accounts_api import Type1RazorpayVirtualAccountsApiOrStr


class VirtualAccountsReceiversRequest(SdkBaseModel):
    types: list[Type1RazorpayVirtualAccountsApiOrStr]
    """Must contain 'vpa'."""


class VirtualAccountsReceiversRequestDict(TypedDict):
    types: list[Type1RazorpayVirtualAccountsApiOrStr]
