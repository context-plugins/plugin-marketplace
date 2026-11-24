from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .proactive_insight_summary import ProactiveInsightSummary, ProactiveInsightSummaryDict
from .reactive_insight_summary import ReactiveInsightSummary, ReactiveInsightSummaryDict


class ListInsightsResponse(SdkBaseModel):
    proactive_insights: Optional[list[ProactiveInsightSummary]] = Field(default=UNSET, alias="ProactiveInsights")
    """The returned list of proactive insights."""

    reactive_insights: Optional[list[ReactiveInsightSummary]] = Field(default=UNSET, alias="ReactiveInsights")
    """The returned list of reactive insights."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListInsightsResponseDict(TypedDict):
    proactive_insights: NotRequired[list[ProactiveInsightSummaryDict]]
    reactive_insights: NotRequired[list[ReactiveInsightSummaryDict]]
    next_token: NotRequired[str]
