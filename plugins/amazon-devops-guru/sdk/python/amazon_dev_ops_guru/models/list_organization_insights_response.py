from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .proactive_organization_insight_summary import (
    ProactiveOrganizationInsightSummary,
    ProactiveOrganizationInsightSummaryDict,
)
from .reactive_organization_insight_summary import (
    ReactiveOrganizationInsightSummary,
    ReactiveOrganizationInsightSummaryDict,
)


class ListOrganizationInsightsResponse(SdkBaseModel):
    proactive_insights: Optional[list[ProactiveOrganizationInsightSummary]] = Field(
        default=UNSET, alias="ProactiveInsights"
    )
    """An integer that specifies the number of open proactive insights in your Amazon Web Services account."""

    reactive_insights: Optional[list[ReactiveOrganizationInsightSummary]] = Field(
        default=UNSET, alias="ReactiveInsights"
    )
    """An integer that specifies the number of open reactive insights in your Amazon Web Services account."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListOrganizationInsightsResponseDict(TypedDict):
    proactive_insights: NotRequired[list[ProactiveOrganizationInsightSummaryDict]]
    reactive_insights: NotRequired[list[ReactiveOrganizationInsightSummaryDict]]
    next_token: NotRequired[str]
