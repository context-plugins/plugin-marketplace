from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .alternative_perspectives import AlternativePerspectives, AlternativePerspectivesDict
from .indirect_market_effects import IndirectMarketEffects, IndirectMarketEffectsDict
from .news_trading_value import NewsTradingValue, NewsTradingValueDict
from .ticker_analysis import TickerAnalysis, TickerAnalysisDict


class AiTradingInsights(SdkBaseModel):
    ticker_analysis: Optional[list[TickerAnalysis]] = UNSET
    news_trading_value: Optional[NewsTradingValue] = UNSET
    indirect_market_effects: Optional[IndirectMarketEffects] = UNSET
    alternative_perspectives: Optional[AlternativePerspectives] = UNSET


class AiTradingInsightsDict(TypedDict):
    ticker_analysis: NotRequired[list[TickerAnalysisDict]]
    news_trading_value: NotRequired[NewsTradingValueDict]
    indirect_market_effects: NotRequired[IndirectMarketEffectsDict]
    alternative_perspectives: NotRequired[AlternativePerspectivesDict]
