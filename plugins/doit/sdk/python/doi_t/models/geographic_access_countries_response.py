from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .geographic_access_country import GeographicAccessCountry, GeographicAccessCountryDict


class GeographicAccessCountriesResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    countries: list[GeographicAccessCountry]


class GeographicAccessCountriesResponseDict(TypedDict):
    countries: list[GeographicAccessCountryDict]
