from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .watchlist_dto import WatchlistDto, WatchlistDtoDict


class WatchlistListResult(SdkBaseModel):
    """Paginated list of watchlists."""

    total: int
    """Total number of matching watchlists across all pages."""

    data: list[WatchlistDto]
    """Watchlists returned for the requested page."""


class WatchlistListResultDict(TypedDict):
    total: int
    data: list[WatchlistDtoDict]
