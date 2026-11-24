from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ohlc_v3 import OhlcV3, OhlcV3Dict


class MarketQuoteOhlcv3(SdkBaseModel):
    last_price: Optional[float] = UNSET
    """The last traded price of symbol"""

    instrument_token: Optional[str] = UNSET
    prev_ohlc: Optional[OhlcV3] = UNSET
    live_ohlc: Optional[OhlcV3] = UNSET


class MarketQuoteOhlcv3Dict(TypedDict):
    last_price: NotRequired[float]
    instrument_token: NotRequired[str]
    prev_ohlc: NotRequired[OhlcV3Dict]
    live_ohlc: NotRequired[OhlcV3Dict]
