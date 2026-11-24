from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_summary_nordic_financial_news_indices_api import (
    CompanySummaryNordicFinancialNewsIndicesApi,
    CompanySummaryNordicFinancialNewsIndicesApiDict,
)
from .pagination import Pagination, PaginationDict


class ApiV1IndicesCompaniesResponse(SdkBaseModel):
    companies: list[CompanySummaryNordicFinancialNewsIndicesApi]
    pagination: Optional[Pagination] = UNSET


class ApiV1IndicesCompaniesResponseDict(TypedDict):
    companies: list[CompanySummaryNordicFinancialNewsIndicesApiDict]
    pagination: NotRequired[PaginationDict]
