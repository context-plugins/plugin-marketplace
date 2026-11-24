from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_insights_status_filter import ListInsightsStatusFilter, ListInsightsStatusFilterDict


class OrganizationInsightsRequest(SdkBaseModel):
    status_filter: ListInsightsStatusFilter = Field(alias="StatusFilter")
    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return with a single call. To retrieve the remaining results, make another call
    with the returned nextToken value."""

    account_ids: Optional[list[str]] = Field(default=UNSET, alias="AccountIds")
    """The ID of the Amazon Web Services account."""

    organizational_unit_ids: Optional[list[str]] = Field(default=UNSET, alias="OrganizationalUnitIds")
    """The ID of the organizational unit."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If this value is null, it
    retrieves the first page."""


class OrganizationInsightsRequestDict(TypedDict):
    status_filter: ListInsightsStatusFilterDict
    max_results: NotRequired[int]
    account_ids: NotRequired[list[str]]
    organizational_unit_ids: NotRequired[list[str]]
    next_token: NotRequired[str]
