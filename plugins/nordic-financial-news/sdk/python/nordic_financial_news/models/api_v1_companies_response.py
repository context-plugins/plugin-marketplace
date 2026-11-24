from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_summary import CompanySummary, CompanySummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1CompaniesResponse(SdkBaseModel):
    companies: list[CompanySummary]
    pagination: Optional[Pagination] = UNSET


class ApiV1CompaniesResponseDict(TypedDict):
    companies: list[CompanySummaryDict]
    pagination: NotRequired[PaginationDict]
