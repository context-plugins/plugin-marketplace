from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_instant_settlements_api import EntityRazorpayInstantSettlementsApiOrStr
from .enums.status_razorpay_instant_settlements_api import StatusRazorpayInstantSettlementsApiOrStr
from .ondemand_payouts import OndemandPayouts, OndemandPayoutsDict


class InstantSettlement(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique instant settlement identifier. Prefix: setlod_"""

    entity: Optional[EntityRazorpayInstantSettlementsApiOrStr] = UNSET
    amount_requested: Optional[int] = UNSET
    """Settlement amount requested (paise)."""

    amount_settled: Optional[int] = UNSET
    """Total amount transferred minus fees and tax (paise)."""

    amount_pending: Optional[int] = UNSET
    """Portion of requested amount yet to be settled (paise)."""

    amount_reversed: Optional[int] = UNSET
    """Amount returned to PG balance (paise)."""

    fees: Optional[int] = UNSET
    """Combined fees and tax deducted (paise)."""

    tax: Optional[int] = UNSET
    """Tax on fee component (paise)."""

    currency: Optional[str] = UNSET
    settle_full_balance: Optional[bool] = UNSET
    """If true, settles maximum available balance."""

    status: Optional[StatusRazorpayInstantSettlementsApiOrStr] = UNSET
    description: Optional[str] = UNSET
    """Custom reference note. Max 30 alphanumeric characters."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET
    ondemand_payouts: Optional[OndemandPayouts] = UNSET
    """Collection of individual payout records for this instant settlement."""


class InstantSettlementDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayInstantSettlementsApiOrStr]
    amount_requested: NotRequired[int]
    amount_settled: NotRequired[int]
    amount_pending: NotRequired[int]
    amount_reversed: NotRequired[int]
    fees: NotRequired[int]
    tax: NotRequired[int]
    currency: NotRequired[str]
    settle_full_balance: NotRequired[bool]
    status: NotRequired[StatusRazorpayInstantSettlementsApiOrStr]
    description: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
    ondemand_payouts: NotRequired[OndemandPayoutsDict]
