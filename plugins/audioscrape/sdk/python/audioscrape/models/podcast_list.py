from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .podcast_summary import PodcastSummary, PodcastSummaryDict


class PodcastList(SdkBaseModel):
    limit: int
    offset: int
    podcasts: list[PodcastSummary]
    total: int


class PodcastListDict(TypedDict):
    limit: int
    offset: int
    podcasts: list[PodcastSummaryDict]
    total: int
