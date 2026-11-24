from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .country import Country, CountryDict


class ApiV2DocumentsCountriesResponse(SdkBaseModel):
    countries: list[Country]
    """Countries a document can be uploaded for"""


class ApiV2DocumentsCountriesResponseDict(TypedDict):
    countries: list[CountryDict]
