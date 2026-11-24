from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .country_summary import CountrySummary, CountrySummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1CountriesResponse(SdkBaseModel):
    countries: list[CountrySummary]
    pagination: Optional[Pagination] = UNSET


class ApiV1CountriesResponseDict(TypedDict):
    countries: list[CountrySummaryDict]
    pagination: NotRequired[PaginationDict]
