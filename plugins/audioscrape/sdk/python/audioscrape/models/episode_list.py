from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .episode_summary import EpisodeSummary, EpisodeSummaryDict


class EpisodeList(SdkBaseModel):
    episodes: list[EpisodeSummary]
    limit: int
    offset: int
    total: int


class EpisodeListDict(TypedDict):
    episodes: list[EpisodeSummaryDict]
    limit: int
    offset: int
    total: int
