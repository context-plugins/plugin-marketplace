from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .pagination_lusha_api_documentation_website_visits_api import (
    PaginationLushaApiDocumentationWebsiteVisitsApi,
    PaginationLushaApiDocumentationWebsiteVisitsApiDict,
)
from .sort import Sort, SortDict
from .website_visits_filters import WebsiteVisitsFilters, WebsiteVisitsFiltersDict


class WebsiteVisitsRequest(SdkBaseModel):
    domains: list[str]
    """Domains configured for tracking in the Lusha dashboard."""

    start_date: Date = Field(alias="startDate")
    """Window start date (YYYY-MM-DD)."""

    end_date: Date = Field(alias="endDate")
    """Window end date (YYYY-MM-DD). Range must be ≤ 3 months."""

    pagination: PaginationLushaApiDocumentationWebsiteVisitsApi
    sort: Optional[Sort] = UNSET
    filters: Optional[WebsiteVisitsFilters] = UNSET


class WebsiteVisitsRequestDict(TypedDict):
    domains: list[str]
    start_date: Date
    end_date: Date
    pagination: PaginationLushaApiDocumentationWebsiteVisitsApiDict
    sort: NotRequired[SortDict]
    filters: NotRequired[WebsiteVisitsFiltersDict]
