from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .balance import Balance, BalanceDict


class BalanceResult(SdkBaseModel):
    user_id: Optional[str] = UNSET
    balance: Optional[Balance] = UNSET
    total_calls: Optional[int] = UNSET
    earnings_pct: Optional[int] = UNSET


class BalanceResultDict(TypedDict):
    user_id: NotRequired[str]
    balance: NotRequired[BalanceDict]
    total_calls: NotRequired[int]
    earnings_pct: NotRequired[int]
