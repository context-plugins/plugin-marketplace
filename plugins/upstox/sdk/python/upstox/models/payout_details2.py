from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PayoutDetails2(SdkBaseModel):
    """Response data for initiate payout request"""

    status: Optional[str] = UNSET
    mode: Optional[str] = UNSET
    amount: Optional[float] = UNSET
    currency: Optional[str] = UNSET
    eta: Optional[str] = UNSET
    message: Optional[str] = UNSET
    transaction_id: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    bank_name: Optional[str] = UNSET
    transaction_fee: Optional[str] = UNSET


class PayoutDetails2Dict(TypedDict):
    status: NotRequired[str]
    mode: NotRequired[str]
    amount: NotRequired[float]
    currency: NotRequired[str]
    eta: NotRequired[str]
    message: NotRequired[str]
    transaction_id: NotRequired[str]
    created_at: NotRequired[str]
    bank_name: NotRequired[str]
    transaction_fee: NotRequired[str]
