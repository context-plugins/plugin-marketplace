from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.currency import CurrencyOrStr
from .enums.entity_razorpay_transfers_api import EntityRazorpayTransfersApiOrStr


class Reversal(SdkBaseModel):
    """A reversal of a transfer — moves funds back from the Linked Account to the merchant. Partial reversals are
    supported and multiple reversals per transfer are allowed. Prefix: rvrsl_"""

    id: Optional[str] = UNSET
    """Reversal ID. Prefix: rvrsl_"""

    entity: Optional[EntityRazorpayTransfersApiOrStr] = UNSET
    transfer_id: Optional[str] = UNSET
    """Transfer ID being reversed (trf_*)."""

    amount: Optional[int] = UNSET
    """Reversed amount in paise."""

    currency: Optional[CurrencyOrStr] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    initiator_id: Optional[str] = UNSET
    """ID of the entity that initiated the reversal."""

    created_at: Optional[int] = UNSET


class ReversalDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayTransfersApiOrStr]
    transfer_id: NotRequired[str]
    amount: NotRequired[int]
    currency: NotRequired[CurrencyOrStr]
    notes: NotRequired[dict[str, str]]
    initiator_id: NotRequired[str]
    created_at: NotRequired[int]
