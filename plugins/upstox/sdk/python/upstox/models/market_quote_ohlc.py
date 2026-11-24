from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ohlc import Ohlc, OhlcDict


class MarketQuoteOhlc(SdkBaseModel):
    ohlc: Optional[Ohlc] = UNSET
    last_price: Optional[float] = UNSET
    """The last traded price of symbol"""

    instrument_token: Optional[str] = UNSET


class MarketQuoteOhlcDict(TypedDict):
    ohlc: NotRequired[OhlcDict]
    last_price: NotRequired[float]
    instrument_token: NotRequired[str]
