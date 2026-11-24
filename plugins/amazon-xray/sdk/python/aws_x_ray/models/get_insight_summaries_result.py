from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight_summary import InsightSummary, InsightSummaryDict


class GetInsightSummariesResult(SdkBaseModel):
    insight_summaries: Optional[list[InsightSummary]] = Field(default=UNSET, alias="InsightSummaries")
    """The summary of each insight within the group matching the provided filters. The summary contains the InsightID,
    start and end time, the root cause service, the root cause and client impact statistics, the top anomalous services,
    and the status of the insight."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetInsightSummariesResultDict(TypedDict):
    insight_summaries: NotRequired[list[InsightSummaryDict]]
    next_token: NotRequired[str]
