from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .location import Location, LocationDict


class Locations(SdkBaseModel):
    locations: Optional[list[Location]] = UNSET
    """The locations."""


class LocationsDict(TypedDict):
    locations: NotRequired[list[LocationDict]]
