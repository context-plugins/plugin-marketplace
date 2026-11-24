from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity2 import Entity2OrStr
from .enums.status1 import Status1OrStr


class InstantSettlementPayout(SdkBaseModel):
    id: Optional[str] = UNSET
    entity: Optional[Entity2OrStr] = UNSET
    initiated_at: Optional[int] = UNSET
    processed_at: Optional[int] = UNSET
    reversed_at: Optional[int] = UNSET
    amount: Optional[int] = UNSET
    amount_settled: Optional[int] = UNSET
    fees: Optional[int] = UNSET
    tax: Optional[int] = UNSET
    utr: Optional[str] = UNSET
    status: Optional[Status1OrStr] = UNSET
    created_at: Optional[int] = UNSET


class InstantSettlementPayoutDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity2OrStr]
    initiated_at: NotRequired[int]
    processed_at: NotRequired[int]
    reversed_at: NotRequired[int]
    amount: NotRequired[int]
    amount_settled: NotRequired[int]
    fees: NotRequired[int]
    tax: NotRequired[int]
    utr: NotRequired[str]
    status: NotRequired[Status1OrStr]
    created_at: NotRequired[int]
