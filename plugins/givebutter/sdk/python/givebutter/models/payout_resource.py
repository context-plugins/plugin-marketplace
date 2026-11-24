from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PayoutResource(SdkBaseModel):
    id: str
    campaign_id: str
    method: str
    status: str
    amount: float
    fee: float
    tip: float
    payout: float
    currency: str
    address: Optional[str] = UNSET
    memo: str
    expected_at: str
    paid_at: str
    created_at: str
    updated_at: str


class PayoutResourceDict(TypedDict):
    id: str
    campaign_id: str
    method: str
    status: str
    amount: float
    fee: float
    tip: float
    payout: float
    currency: str
    address: NotRequired[str]
    memo: str
    expected_at: str
    paid_at: str
    created_at: str
    updated_at: str
