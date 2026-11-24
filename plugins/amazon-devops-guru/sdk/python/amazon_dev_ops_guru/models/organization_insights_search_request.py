from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type3 import Type3OrStr
from .search_organization_insights_filters import (
    SearchOrganizationInsightsFilters,
    SearchOrganizationInsightsFiltersDict,
)
from .start_time_range import StartTimeRange, StartTimeRangeDict


class OrganizationInsightsSearchRequest(SdkBaseModel):
    account_ids: list[str] = Field(alias="AccountIds")
    """The ID of the Amazon Web Services account."""

    start_time_range: StartTimeRange = Field(alias="StartTimeRange")
    filters: Optional[SearchOrganizationInsightsFilters] = Field(default=UNSET, alias="Filters")
    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return with a single call. To retrieve the remaining results, make another call
    with the returned nextToken value."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If this value is null, it
    retrieves the first page."""

    type_: Type3OrStr = Field(alias="Type")
    """The type of insights you are searching for (REACTIVE or PROACTIVE)."""


class OrganizationInsightsSearchRequestDict(TypedDict):
    account_ids: list[str]
    start_time_range: StartTimeRangeDict
    filters: NotRequired[SearchOrganizationInsightsFiltersDict]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    type_: Type3OrStr
