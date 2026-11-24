from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unsettled_profit import UnsettledProfit, UnsettledProfitDict


class CashUnavailableToTrade(SdkBaseModel):
    unsettled_profit: Optional[UnsettledProfit] = UNSET


class CashUnavailableToTradeDict(TypedDict):
    unsettled_profit: NotRequired[UnsettledProfitDict]
