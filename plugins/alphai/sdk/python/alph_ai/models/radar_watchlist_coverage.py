from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RadarWatchlistCoverage(SdkBaseModel):
    no_recent_news: list[str]
    not_in_snapshot: list[str]


class RadarWatchlistCoverageDict(TypedDict):
    no_recent_news: list[str]
    not_in_snapshot: list[str]
