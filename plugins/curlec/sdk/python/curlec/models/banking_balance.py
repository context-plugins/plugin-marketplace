from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.account_type_razorpay_x_banking_balances_api import AccountTypeRazorpayXBankingBalancesApiOrStr
from .enums.entity_razorpay_x_banking_balances_api import EntityRazorpayXBankingBalancesApiOrStr


class BankingBalance(SdkBaseModel):
    """RazorpayX banking account balance."""

    entity: Optional[EntityRazorpayXBankingBalancesApiOrStr] = UNSET
    currency: Optional[str] = UNSET
    account_number: Optional[str] = UNSET
    account_type: Optional[AccountTypeRazorpayXBankingBalancesApiOrStr] = UNSET
    bank_name: Optional[str] = UNSET
    bank_code: Optional[str] = UNSET
    """First 4 characters of IFSC"""

    amount: Optional[int] = UNSET
    """Total balance in paise"""

    available_amount: Optional[int] = UNSET
    """Available balance in paise"""

    refreshed_at: Optional[int] = UNSET
    """Unix timestamp of last refresh"""


class BankingBalanceDict(TypedDict):
    entity: NotRequired[EntityRazorpayXBankingBalancesApiOrStr]
    currency: NotRequired[str]
    account_number: NotRequired[str]
    account_type: NotRequired[AccountTypeRazorpayXBankingBalancesApiOrStr]
    bank_name: NotRequired[str]
    bank_code: NotRequired[str]
    amount: NotRequired[int]
    available_amount: NotRequired[int]
    refreshed_at: NotRequired[int]
