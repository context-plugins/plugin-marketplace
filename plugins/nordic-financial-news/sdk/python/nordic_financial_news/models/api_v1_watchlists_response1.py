from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_summary import CompanySummary, CompanySummaryDict
from .pagination import Pagination, PaginationDict
from .watchlist_summary import WatchlistSummary, WatchlistSummaryDict


class ApiV1WatchlistsResponse1(SdkBaseModel):
    watchlist: WatchlistSummary
    companies: list[CompanySummary]
    pagination: Optional[Pagination] = UNSET


class ApiV1WatchlistsResponse1Dict(TypedDict):
    watchlist: WatchlistSummaryDict
    companies: list[CompanySummaryDict]
    pagination: NotRequired[PaginationDict]
