from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cash_unavailable_to_trade import CashUnavailableToTrade, CashUnavailableToTradeDict
from .pledge_unavailable_to_trade import PledgeUnavailableToTrade, PledgeUnavailableToTradeDict


class UnavailableToTrade(SdkBaseModel):
    cash_unavailable_to_trade: Optional[CashUnavailableToTrade] = UNSET
    pledge_unavailable_to_trade: Optional[PledgeUnavailableToTrade] = UNSET


class UnavailableToTradeDict(TypedDict):
    cash_unavailable_to_trade: NotRequired[CashUnavailableToTradeDict]
    pledge_unavailable_to_trade: NotRequired[PledgeUnavailableToTradeDict]
