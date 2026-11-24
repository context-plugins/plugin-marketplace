from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .geo_locations import GeoLocations, GeoLocationsDict
from .interest import Interest, InterestDict


class Targeting(SdkBaseModel):
    """Targeting specification for the ad set"""

    age_min: Optional[int] = UNSET
    age_max: Optional[int] = UNSET
    genders: Optional[list[int]] = UNSET
    geo_locations: Optional[GeoLocations] = UNSET
    interests: Optional[list[Interest]] = UNSET


class TargetingDict(TypedDict):
    age_min: NotRequired[int]
    age_max: NotRequired[int]
    genders: NotRequired[list[int]]
    geo_locations: NotRequired[GeoLocationsDict]
    interests: NotRequired[list[InterestDict]]
