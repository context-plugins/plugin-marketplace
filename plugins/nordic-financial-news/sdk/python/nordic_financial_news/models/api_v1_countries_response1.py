from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .country_summary import CountrySummary, CountrySummaryDict


class ApiV1CountriesResponse1(SdkBaseModel):
    country: CountrySummary


class ApiV1CountriesResponse1Dict(TypedDict):
    country: CountrySummaryDict
