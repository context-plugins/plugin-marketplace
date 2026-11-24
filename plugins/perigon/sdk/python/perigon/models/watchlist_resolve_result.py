from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .watchlist_dto import WatchlistDto, WatchlistDtoDict


class WatchlistResolveResult(SdkBaseModel):
    """Resolved watchlists response."""

    data: list[WatchlistDto]
    """Resolved watchlists."""


class WatchlistResolveResultDict(TypedDict):
    data: list[WatchlistDtoDict]
