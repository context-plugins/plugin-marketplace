from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .brief_signal_dto import BriefSignalDto, BriefSignalDtoDict


class BriefEventDto(SdkBaseModel):
    uid: str
    story_id: str
    title: str
    summary: str
    url: str
    article_url: str
    source_domain: str
    source_type: str
    time_published: RFC3339DateTime
    matched_tickers: list[str]
    category: str
    relevance_score: int
    information_novelty: Optional[int] = UNSET
    actionability: Optional[str] = UNSET
    signals: Optional[list[BriefSignalDto]] = UNSET
    earnings_available: bool = False


class BriefEventDtoDict(TypedDict):
    uid: str
    story_id: str
    title: str
    summary: str
    url: str
    article_url: str
    source_domain: str
    source_type: str
    time_published: RFC3339DateTime
    matched_tickers: list[str]
    category: str
    relevance_score: int
    information_novelty: NotRequired[int]
    actionability: NotRequired[str]
    signals: NotRequired[list[BriefSignalDtoDict]]
    earnings_available: NotRequired[bool]
