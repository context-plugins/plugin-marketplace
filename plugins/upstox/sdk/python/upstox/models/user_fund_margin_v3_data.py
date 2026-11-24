from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .available_to_trade import AvailableToTrade, AvailableToTradeDict
from .unavailable_to_trade import UnavailableToTrade, UnavailableToTradeDict


class UserFundMarginV3Data(SdkBaseModel):
    available_to_trade: Optional[AvailableToTrade] = UNSET
    unavailable_to_trade: Optional[UnavailableToTrade] = UNSET


class UserFundMarginV3DataDict(TypedDict):
    available_to_trade: NotRequired[AvailableToTradeDict]
    unavailable_to_trade: NotRequired[UnavailableToTradeDict]
