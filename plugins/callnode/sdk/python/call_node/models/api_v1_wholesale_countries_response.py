from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .country import Country, CountryDict


class ApiV1WholesaleCountriesResponse(SdkBaseModel):
    countries: Optional[list[Country]] = UNSET


class ApiV1WholesaleCountriesResponseDict(TypedDict):
    countries: NotRequired[list[CountryDict]]
