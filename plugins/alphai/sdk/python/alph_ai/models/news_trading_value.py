from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.actionability import ActionabilityOrStr


class NewsTradingValue(SdkBaseModel):
    actionability_score: Optional[ActionabilityOrStr] = UNSET
    information_novelty: Optional[int] = UNSET
    """How much NEW information the article carries (1–10), kept separate from relevance: a mega-cap post-earnings recap
    is high relevance but low novelty. 0 on rows enriched before the field existed."""

    timing_relevance: Optional[str] = UNSET
    market_sentiment_alignment: Optional[str] = UNSET
    estimated_read_time: Optional[str] = UNSET


class NewsTradingValueDict(TypedDict):
    actionability_score: NotRequired[ActionabilityOrStr]
    information_novelty: NotRequired[int]
    timing_relevance: NotRequired[str]
    market_sentiment_alignment: NotRequired[str]
    estimated_read_time: NotRequired[str]
