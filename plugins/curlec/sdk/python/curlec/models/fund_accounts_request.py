from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_account1 import BankAccount1, BankAccount1Dict
from .card1 import Card1, Card1Dict
from .enums.account_type_razorpay_x_fund_accounts_api import AccountTypeRazorpayXFundAccountsApiOrStr
from .vpa1 import Vpa1, Vpa1Dict
from .wallet1 import Wallet1, Wallet1Dict


class FundAccountsRequest(SdkBaseModel):
    contact_id: str
    account_type: AccountTypeRazorpayXFundAccountsApiOrStr
    bank_account: Optional[BankAccount1] = UNSET
    vpa: Optional[Vpa1] = UNSET
    card: Optional[Card1] = UNSET
    """Requires PCI DSS compliance"""

    wallet: Optional[Wallet1] = UNSET
    """Required when account_type=wallet (Amazon Pay only)"""


class FundAccountsRequestDict(TypedDict):
    contact_id: str
    account_type: AccountTypeRazorpayXFundAccountsApiOrStr
    bank_account: NotRequired[BankAccount1Dict]
    vpa: NotRequired[Vpa1Dict]
    card: NotRequired[Card1Dict]
    wallet: NotRequired[Wallet1Dict]
