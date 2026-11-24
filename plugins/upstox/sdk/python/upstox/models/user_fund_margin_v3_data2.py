from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .available_to_trade import AvailableToTrade, AvailableToTradeDict
from .unavailable_to_trade import UnavailableToTrade, UnavailableToTradeDict


class UserFundMarginV3Data2(SdkBaseModel):
    """Response data for fund and margin v3"""

    available_to_trade: Optional[AvailableToTrade] = UNSET
    unavailable_to_trade: Optional[UnavailableToTrade] = UNSET


class UserFundMarginV3Data2Dict(TypedDict):
    available_to_trade: NotRequired[AvailableToTradeDict]
    unavailable_to_trade: NotRequired[UnavailableToTradeDict]
