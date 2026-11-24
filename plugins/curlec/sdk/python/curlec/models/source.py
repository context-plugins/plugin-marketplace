from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_x_transactions_api import Entity1RazorpayXTransactionsApiOrStr


class Source(SdkBaseModel):
    """Source entity — either a payout (debit) or bank_transfer (credit)"""

    id: Optional[str] = UNSET
    """pout_* for payouts, bt_* for bank transfers"""

    entity: Optional[Entity1RazorpayXTransactionsApiOrStr] = UNSET
    amount: Optional[int] = UNSET
    fund_account_id: Optional[str] = UNSET
    """Payout only"""

    notes: Optional[Any] = UNSET
    """Payout only"""

    fees: Optional[int] = UNSET
    """Payout only, populated at processing state"""

    tax: Optional[int] = UNSET
    """Payout only, populated at processing state"""

    status: Optional[str] = UNSET
    """Payout only"""

    utr: Optional[str] = UNSET
    """Payout only"""

    mode: Optional[str] = UNSET
    """Payout only"""

    fee_type: Optional[str] = UNSET
    payer_name: Optional[str] = UNSET
    """bank_transfer only"""

    payer_account: Optional[str] = UNSET
    """bank_transfer only"""

    payer_ifsc: Optional[str] = UNSET
    """bank_transfer only"""

    bank_reference: Optional[str] = UNSET
    """bank_transfer only"""

    created_at: Optional[int] = UNSET


class SourceDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity1RazorpayXTransactionsApiOrStr]
    amount: NotRequired[int]
    fund_account_id: NotRequired[str]
    notes: NotRequired[Any]
    fees: NotRequired[int]
    tax: NotRequired[int]
    status: NotRequired[str]
    utr: NotRequired[str]
    mode: NotRequired[str]
    fee_type: NotRequired[str]
    payer_name: NotRequired[str]
    payer_account: NotRequired[str]
    payer_ifsc: NotRequired[str]
    bank_reference: NotRequired[str]
    created_at: NotRequired[int]
