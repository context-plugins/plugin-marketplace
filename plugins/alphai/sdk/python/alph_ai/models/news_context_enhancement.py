from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .key_entity import KeyEntity, KeyEntityDict


class NewsContextEnhancement(SdkBaseModel):
    background_context: Optional[str] = UNSET
    impact_analysis: Optional[str] = UNSET
    key_entities: Optional[list[KeyEntity]] = UNSET
    market_relevance_summary: Optional[str] = UNSET
    estimated_read_time_minutes: Optional[int] = UNSET


class NewsContextEnhancementDict(TypedDict):
    background_context: NotRequired[str]
    impact_analysis: NotRequired[str]
    key_entities: NotRequired[list[KeyEntityDict]]
    market_relevance_summary: NotRequired[str]
    estimated_read_time_minutes: NotRequired[int]
