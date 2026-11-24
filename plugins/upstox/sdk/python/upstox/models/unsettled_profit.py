from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UnsettledProfit(SdkBaseModel):
    todays_profit: Optional[float] = UNSET
    previous_days: Optional[float] = UNSET


class UnsettledProfitDict(TypedDict):
    todays_profit: NotRequired[float]
    previous_days: NotRequired[float]
