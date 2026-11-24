from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .region import Region, RegionDict


class ApiV2NumbersCountriesRegionsResponse(SdkBaseModel):
    regions: list[Region]
    """List of states/provinces with available DID numbers"""


class ApiV2NumbersCountriesRegionsResponseDict(TypedDict):
    regions: list[RegionDict]
