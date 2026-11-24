from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .watchlist_dto import WatchlistDto, WatchlistDtoDict


class WatchlistResult(SdkBaseModel):
    """Single watchlist response."""

    data: WatchlistDto
    """Watchlist of people and companies for use with monitors."""


class WatchlistResultDict(TypedDict):
    data: WatchlistDtoDict
