from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .impact_analysis import ImpactAnalysis, ImpactAnalysisDict


class TickerAnalysis(SdkBaseModel):
    ticker: Optional[str] = UNSET
    relevance_context: Optional[str] = UNSET
    impact_analysis: Optional[ImpactAnalysis] = UNSET


class TickerAnalysisDict(TypedDict):
    ticker: NotRequired[str]
    relevance_context: NotRequired[str]
    impact_analysis: NotRequired[ImpactAnalysisDict]
