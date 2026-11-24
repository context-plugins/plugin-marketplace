from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_razorpay_virtual_accounts_api import TypeRazorpayVirtualAccountsApiOrStr


class Receivers(SdkBaseModel):
    types: list[TypeRazorpayVirtualAccountsApiOrStr]
    """Receiver types. bank_account creates a virtual bank account. vpa creates a UPI VPA (Smart Collect 2.0, requires
    feature flag)."""


class ReceiversDict(TypedDict):
    types: list[TypeRazorpayVirtualAccountsApiOrStr]
