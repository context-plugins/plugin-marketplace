from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .country_region import CountryRegion, CountryRegionDict


class CompaniesApiCountriesRegionsResponse(SdkBaseModel):
    value: Optional[list[CountryRegion]] = UNSET


class CompaniesApiCountriesRegionsResponseDict(TypedDict):
    value: NotRequired[list[CountryRegionDict]]
