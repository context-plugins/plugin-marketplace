from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .auction_location import AuctionLocation, AuctionLocationDict
from .cursor_meta import CursorMeta, CursorMetaDict


class LocationsResponse(SdkBaseModel):
    data: list[AuctionLocation]
    meta: CursorMeta
    """Cursor pagination metadata."""


class LocationsResponseDict(TypedDict):
    data: list[AuctionLocationDict]
    meta: CursorMetaDict
