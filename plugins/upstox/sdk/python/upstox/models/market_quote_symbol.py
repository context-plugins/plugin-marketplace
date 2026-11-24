from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .depth_map import DepthMap, DepthMapDict
from .ohlc import Ohlc, OhlcDict


class MarketQuoteSymbol(SdkBaseModel):
    ohlc: Optional[Ohlc] = UNSET
    depth: Optional[DepthMap] = UNSET
    timestamp: Optional[str] = UNSET
    """Time in milliseconds at which the feeds was updated"""

    instrument_token: Optional[str] = UNSET
    """Key issued by Upstox for the instrument"""

    symbol: Optional[str] = UNSET
    """Shows the trading symbol of the instrument"""

    last_price: Optional[float] = UNSET
    """The last traded price of symbol"""

    volume: Optional[int] = UNSET
    """The volume traded today on symbol"""

    average_price: Optional[float] = UNSET
    """Average price"""

    oi: Optional[float] = UNSET
    """Total number of outstanding contracts held by market participants exchange-wide (only F&O)"""

    net_change: Optional[float] = UNSET
    """The absolute change from yesterday's close to last traded price"""

    total_buy_quantity: Optional[float] = UNSET
    """The total number of bid quantity available for trading"""

    total_sell_quantity: Optional[float] = UNSET
    """The total number of ask quantity available for trading"""

    lower_circuit_limit: Optional[float] = UNSET
    """The lower circuit of symbol"""

    upper_circuit_limit: Optional[float] = UNSET
    """The upper circuit of symbol"""

    last_trade_time: Optional[str] = UNSET
    """Time in milliseconds at which last trade happened"""

    oi_day_high: Optional[float] = UNSET
    oi_day_low: Optional[float] = UNSET


class MarketQuoteSymbolDict(TypedDict):
    ohlc: NotRequired[OhlcDict]
    depth: NotRequired[DepthMapDict]
    timestamp: NotRequired[str]
    instrument_token: NotRequired[str]
    symbol: NotRequired[str]
    last_price: NotRequired[float]
    volume: NotRequired[int]
    average_price: NotRequired[float]
    oi: NotRequired[float]
    net_change: NotRequired[float]
    total_buy_quantity: NotRequired[float]
    total_sell_quantity: NotRequired[float]
    lower_circuit_limit: NotRequired[float]
    upper_circuit_limit: NotRequired[float]
    last_trade_time: NotRequired[str]
    oi_day_high: NotRequired[float]
    oi_day_low: NotRequired[float]
