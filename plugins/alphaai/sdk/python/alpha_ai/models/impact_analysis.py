from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.confidence import ConfidenceOrStr
from .enums.sentiment import SentimentOrStr


class ImpactAnalysis(SdkBaseModel):
    summary: Optional[str] = UNSET
    sentiment: Optional[SentimentOrStr] = UNSET
    price_impact_prediction: Optional[str] = UNSET
    confidence: Optional[ConfidenceOrStr] = UNSET
    reasoning: Optional[str] = UNSET


class ImpactAnalysisDict(TypedDict):
    summary: NotRequired[str]
    sentiment: NotRequired[SentimentOrStr]
    price_impact_prediction: NotRequired[str]
    confidence: NotRequired[ConfidenceOrStr]
    reasoning: NotRequired[str]
