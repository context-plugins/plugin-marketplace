from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .watchlist_summary import WatchlistSummary, WatchlistSummaryDict


class ApiV1WatchlistsResponse(SdkBaseModel):
    watchlists: list[WatchlistSummary]


class ApiV1WatchlistsResponseDict(TypedDict):
    watchlists: list[WatchlistSummaryDict]
