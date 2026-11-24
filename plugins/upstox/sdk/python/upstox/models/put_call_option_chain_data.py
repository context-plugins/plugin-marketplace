from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_data import AnalyticsData, AnalyticsDataDict
from .market_data import MarketData, MarketDataDict


class PutCallOptionChainData(SdkBaseModel):
    instrument_key: Optional[str] = UNSET
    market_data: Optional[MarketData] = UNSET
    option_greeks: Optional[AnalyticsData] = UNSET


class PutCallOptionChainDataDict(TypedDict):
    instrument_key: NotRequired[str]
    market_data: NotRequired[MarketDataDict]
    option_greeks: NotRequired[AnalyticsDataDict]
