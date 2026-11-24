from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .location import Location, LocationDict


class ApiV2NumbersCountriesLocationsResponse(SdkBaseModel):
    locations: list[Location]
    """List of locations matching search criteria"""


class ApiV2NumbersCountriesLocationsResponseDict(TypedDict):
    locations: list[LocationDict]
