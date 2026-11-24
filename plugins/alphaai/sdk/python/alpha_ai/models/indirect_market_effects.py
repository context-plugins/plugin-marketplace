from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IndirectMarketEffects(SdkBaseModel):
    sector_implications: Optional[str] = UNSET
    regional_market_impact: Optional[str] = UNSET
    global_market_relevance: Optional[str] = UNSET


class IndirectMarketEffectsDict(TypedDict):
    sector_implications: NotRequired[str]
    regional_market_impact: NotRequired[str]
    global_market_relevance: NotRequired[str]
