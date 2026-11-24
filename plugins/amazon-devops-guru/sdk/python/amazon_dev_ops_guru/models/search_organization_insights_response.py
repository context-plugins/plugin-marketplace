from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .proactive_insight_summary_amazon_dev_ops_guru_organization_api import (
    ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi,
    ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApiDict,
)
from .reactive_insight_summary_amazon_dev_ops_guru_organization_api import (
    ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi,
    ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApiDict,
)


class SearchOrganizationInsightsResponse(SdkBaseModel):
    proactive_insights: Optional[list[ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi]] = Field(
        default=UNSET, alias="ProactiveInsights"
    )
    """An integer that specifies the number of open proactive insights in your Amazon Web Services account."""

    reactive_insights: Optional[list[ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi]] = Field(
        default=UNSET, alias="ReactiveInsights"
    )
    """An integer that specifies the number of open reactive insights in your Amazon Web Services account."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class SearchOrganizationInsightsResponseDict(TypedDict):
    proactive_insights: NotRequired[list[ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApiDict]]
    reactive_insights: NotRequired[list[ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApiDict]]
    next_token: NotRequired[str]
