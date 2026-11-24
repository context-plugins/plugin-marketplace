from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .location import Location, LocationDict


class LocationList(SdkBaseModel):
    data: list[Location]
    next_cursor: str | None
    """Always ``null``: not paginated."""


class LocationListDict(TypedDict):
    data: list[LocationDict]
    next_cursor: str | None
