from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .trace_summary import TraceSummary, TraceSummaryDict


class GetTraceSummariesResult(SdkBaseModel):
    trace_summaries: Optional[list[TraceSummary]] = Field(default=UNSET, alias="TraceSummaries")
    """Trace IDs and annotations for traces that were found in the specified time frame."""

    approximate_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ApproximateTime")
    """The start time of this page of results."""

    traces_processed_count: Optional[int] = Field(default=UNSET, alias="TracesProcessedCount")
    """The total number of traces processed, including traces that did not match the specified filter expression."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the requested time frame contained more than one page of results, you can use this token to retrieve the next
    page. The first page contains the most recent results, closest to the end of the time frame."""


class GetTraceSummariesResultDict(TypedDict):
    trace_summaries: NotRequired[list[TraceSummaryDict]]
    approximate_time: NotRequired[RFC3339DateTime]
    traces_processed_count: NotRequired[int]
    next_token: NotRequired[str]
