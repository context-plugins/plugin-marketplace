from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cash_available_to_trade import CashAvailableToTrade, CashAvailableToTradeDict
from .pledge_available_to_trade import PledgeAvailableToTrade, PledgeAvailableToTradeDict


class AvailableToTrade(SdkBaseModel):
    total: Optional[float] = UNSET
    cash_available_to_trade: Optional[CashAvailableToTrade] = UNSET
    pledge_available_to_trade: Optional[PledgeAvailableToTrade] = UNSET


class AvailableToTradeDict(TypedDict):
    total: NotRequired[float]
    cash_available_to_trade: NotRequired[CashAvailableToTradeDict]
    pledge_available_to_trade: NotRequired[PledgeAvailableToTradeDict]
