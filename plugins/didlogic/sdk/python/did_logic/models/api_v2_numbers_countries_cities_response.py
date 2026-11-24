from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .city import City, CityDict


class ApiV2NumbersCountriesCitiesResponse(SdkBaseModel):
    cities: list[City]
    """List of cities with available DID numbers"""


class ApiV2NumbersCountriesCitiesResponseDict(TypedDict):
    cities: list[CityDict]
