from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .country_didlogic_com_numbers_inventory_api import (
    CountryDidlogicComNumbersInventoryApi,
    CountryDidlogicComNumbersInventoryApiDict,
)


class ApiV2NumbersCountriesResponse(SdkBaseModel):
    countries: list[CountryDidlogicComNumbersInventoryApi]
    """List of countries with available DID numbers"""


class ApiV2NumbersCountriesResponseDict(TypedDict):
    countries: list[CountryDidlogicComNumbersInventoryApiDict]
