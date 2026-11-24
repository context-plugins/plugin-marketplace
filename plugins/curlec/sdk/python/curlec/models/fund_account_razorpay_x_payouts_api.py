from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_account_razorpay_x_fund_accounts_api import (
    BankAccountRazorpayXFundAccountsApi,
    BankAccountRazorpayXFundAccountsApiDict,
)
from .card import Card, CardDict
from .enums.account_type_razorpay_x_fund_accounts_api import AccountTypeRazorpayXFundAccountsApiOrStr
from .enums.entity1_razorpay_x_payouts_api import Entity1RazorpayXPayoutsApiOrStr
from .vpa_razorpay_x_fund_accounts_api import VpaRazorpayXFundAccountsApi, VpaRazorpayXFundAccountsApiDict
from .wallet import Wallet, WalletDict


class FundAccountRazorpayXPayoutsApi(SdkBaseModel):
    """Payout destination linked to a Contact. Immutable after creation."""

    id: Optional[str] = UNSET
    """Fund account ID (fa_*)"""

    entity: Optional[Entity1RazorpayXPayoutsApiOrStr] = UNSET
    contact_id: Optional[str] = UNSET
    account_type: Optional[AccountTypeRazorpayXFundAccountsApiOrStr] = UNSET
    active: Optional[bool] = UNSET
    batch_id: Optional[str] = UNSET
    bank_account: Optional[BankAccountRazorpayXFundAccountsApi] = UNSET
    vpa: Optional[VpaRazorpayXFundAccountsApi] = UNSET
    card: Optional[Card] = UNSET
    created_at: Optional[int] = UNSET
    wallet: Optional[Wallet] = UNSET
    """Amazon Pay wallet details. Required when account_type=wallet."""


class FundAccountRazorpayXPayoutsApiDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity1RazorpayXPayoutsApiOrStr]
    contact_id: NotRequired[str]
    account_type: NotRequired[AccountTypeRazorpayXFundAccountsApiOrStr]
    active: NotRequired[bool]
    batch_id: NotRequired[str]
    bank_account: NotRequired[BankAccountRazorpayXFundAccountsApiDict]
    vpa: NotRequired[VpaRazorpayXFundAccountsApiDict]
    card: NotRequired[CardDict]
    created_at: NotRequired[int]
    wallet: NotRequired[WalletDict]
