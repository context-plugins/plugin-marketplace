from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity3 import Entity3OrStr
from .enums.mode import ModeOrStr
from .payer_bank_account import PayerBankAccount, PayerBankAccountDict
from .virtual_account import VirtualAccount, VirtualAccountDict


class BankTransfer(SdkBaseModel):
    """A payment received into a Virtual Account via bank transfer (NEFT/RTGS/IMPS/UPI). Created automatically when a
    payer sends funds to the virtual account. Prefix: bt_"""

    id: Optional[str] = UNSET
    """Bank transfer ID. Prefix: bt_"""

    entity: Optional[Entity3OrStr] = UNSET
    payment_id: Optional[str] = UNSET
    """Razorpay payment ID generated for this bank transfer (pay_*)."""

    mode: Optional[ModeOrStr] = UNSET
    """Transfer mode used by the payer."""

    amount: Optional[int] = UNSET
    """Amount received in paise."""

    payer_bank_account: Optional[PayerBankAccount] = UNSET
    """Payer's bank account details."""

    bank_reference: Optional[str] = UNSET
    """UTR (Unique Transaction Reference) number from the bank."""

    virtual_account_id: Optional[str] = UNSET
    """Virtual account that received this transfer (va_*)."""

    virtual_account: Optional[VirtualAccount] = UNSET
    """A virtual bank account or VPA that accepts NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each payment creates a
    BankTransfer entity. Auto-closes after 90 days of inactivity. Prefix: va_"""


class BankTransferDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity3OrStr]
    payment_id: NotRequired[str]
    mode: NotRequired[ModeOrStr]
    amount: NotRequired[int]
    payer_bank_account: NotRequired[PayerBankAccountDict]
    bank_reference: NotRequired[str]
    virtual_account_id: NotRequired[str]
    virtual_account: NotRequired[VirtualAccountDict]
