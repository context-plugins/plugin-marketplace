from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .episode import Episode, EpisodeDict
from .podcast import Podcast, PodcastDict
from .result_urls import ResultUrls, ResultUrlsDict
from .timestamp import Timestamp, TimestampDict


class SearchResult(SdkBaseModel):
    episode: Episode
    highlighted_text: OptionalNullable[str] = UNSET
    podcast: Podcast
    score: float
    segment_id: str
    speaker: OptionalNullable[str] = UNSET
    text: str
    timestamp: Timestamp
    urls: ResultUrls


class SearchResultDict(TypedDict):
    episode: EpisodeDict
    highlighted_text: NotRequired[str | None]
    podcast: PodcastDict
    score: float
    segment_id: str
    speaker: NotRequired[str | None]
    text: str
    timestamp: TimestampDict
    urls: ResultUrlsDict
