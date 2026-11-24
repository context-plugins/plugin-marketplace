from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.currency1 import Currency1OrStr
from .enums.entity1_razorpay_transfers_api import Entity1RazorpayTransfersApiOrStr
from .enums.settlement_status import SettlementStatusOrStr
from .enums.transfer_status import TransferStatusOrStr


class TransferRazorpayTransfersApi(SdkBaseModel):
    """A fund transfer from a merchant or captured payment to a Linked Account (Route). Minimum amount is ₹100 (10000
    paise). INR only. Prefix: trf_"""

    id: Optional[str] = UNSET
    """Transfer ID. Prefix: trf_"""

    entity: Optional[Entity1RazorpayTransfersApiOrStr] = UNSET
    source: Optional[str] = UNSET
    """Source entity ID (payment ID, order ID, or merchant account ID for direct transfers)."""

    recipient: Optional[str] = UNSET
    """Destination Linked Account ID (acc_*)."""

    amount: Optional[int] = UNSET
    """Transfer amount in paise. Minimum 10000 (₹100)."""

    currency: Optional[Currency1OrStr] = UNSET
    """Always INR for transfers."""

    amount_reversed: Optional[int] = UNSET
    """Total amount reversed so far in paise."""

    fees: Optional[int] = UNSET
    """Transfer fee charged in paise."""

    tax: Optional[int] = UNSET
    """GST on transfer fee in paise."""

    transfer_status: Optional[TransferStatusOrStr] = UNSET
    """Transfer processing status."""

    settlement_status: Optional[SettlementStatusOrStr] = UNSET
    """Settlement status of the transferred funds in the Linked Account."""

    on_hold: Optional[bool] = UNSET
    """If true, settlement of this transfer is on hold."""

    on_hold_until: Optional[int] = UNSET
    """Unix timestamp until which settlement is on hold. null means indefinite hold."""

    recipient_settlement_id: Optional[str] = UNSET
    """Settlement ID (setl_*) in the Linked Account once settled."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    linked_account_notes: Optional[list[str]] = UNSET
    """Keys from notes that will be visible to the Linked Account in their dashboard."""

    created_at: Optional[int] = UNSET
    processed_at: Optional[int] = UNSET
    """Unix timestamp when the transfer was processed."""


class TransferRazorpayTransfersApiDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity1RazorpayTransfersApiOrStr]
    source: NotRequired[str]
    recipient: NotRequired[str]
    amount: NotRequired[int]
    currency: NotRequired[Currency1OrStr]
    amount_reversed: NotRequired[int]
    fees: NotRequired[int]
    tax: NotRequired[int]
    transfer_status: NotRequired[TransferStatusOrStr]
    settlement_status: NotRequired[SettlementStatusOrStr]
    on_hold: NotRequired[bool]
    on_hold_until: NotRequired[int]
    recipient_settlement_id: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    linked_account_notes: NotRequired[list[str]]
    created_at: NotRequired[int]
    processed_at: NotRequired[int]
