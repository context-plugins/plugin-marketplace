from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resiliency_group_summary import ResiliencyGroupSummary, ResiliencyGroupSummaryDict


class ListResiliencyGroupsResult(SdkBaseModel):
    items: Optional[list[ResiliencyGroupSummary]] = UNSET
    """Summary information about the resiliency groups."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class ListResiliencyGroupsResultDict(TypedDict):
    items: NotRequired[list[ResiliencyGroupSummaryDict]]
    next_token: NotRequired[str]
