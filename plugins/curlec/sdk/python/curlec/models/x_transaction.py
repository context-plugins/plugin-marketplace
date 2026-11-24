from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.currency import CurrencyOrStr
from .enums.entity_razorpay_x_transactions_api import EntityRazorpayXTransactionsApiOrStr
from .source import Source, SourceDict


class XTransaction(SdkBaseModel):
    """RazorpayX transaction record — inflow (bank_transfer credit) or outflow (payout debit)."""

    id: Optional[str] = UNSET
    """Transaction ID (txn_*)"""

    entity: Optional[EntityRazorpayXTransactionsApiOrStr] = UNSET
    account_number: Optional[str] = UNSET
    """RazorpayX account number"""

    amount: Optional[int] = UNSET
    """Amount in paise (does not include fees/tax)"""

    currency: Optional[CurrencyOrStr] = UNSET
    credit: Optional[int] = UNSET
    """Amount credited in paise; 0 for debits"""

    debit: Optional[int] = UNSET
    """Amount debited in paise; 0 for credits"""

    balance: Optional[int] = UNSET
    """Remaining account balance in paise after this transaction"""

    source: Optional[Source] = UNSET
    """Source entity — either a payout (debit) or bank_transfer (credit)"""

    created_at: Optional[int] = UNSET
    """Unix timestamp"""


class XTransactionDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayXTransactionsApiOrStr]
    account_number: NotRequired[str]
    amount: NotRequired[int]
    currency: NotRequired[CurrencyOrStr]
    credit: NotRequired[int]
    debit: NotRequired[int]
    balance: NotRequired[int]
    source: NotRequired[SourceDict]
    created_at: NotRequired[int]
