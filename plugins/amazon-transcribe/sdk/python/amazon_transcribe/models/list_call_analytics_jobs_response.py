from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .call_analytics_job_summary import CallAnalyticsJobSummary, CallAnalyticsJobSummaryDict
from .enums.status1 import Status1OrStr


class ListCallAnalyticsJobsResponse(SdkBaseModel):
    status: Optional[Status1OrStr] = Field(default=UNSET, alias="Status")
    """Lists all Call Analytics jobs that have the status specified in your request. Jobs are ordered by creation date,
    with the newest job first."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If NextToken is present in your response, it indicates that not all results are displayed. To view the next set
    of results, copy the string associated with the NextToken parameter in your results output, then run your request
    again including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    call_analytics_job_summaries: Optional[list[CallAnalyticsJobSummary]] = Field(
        default=UNSET, alias="CallAnalyticsJobSummaries"
    )
    """Provides a summary of information about each result."""


class ListCallAnalyticsJobsResponseDict(TypedDict):
    status: NotRequired[Status1OrStr]
    next_token: NotRequired[str]
    call_analytics_job_summaries: NotRequired[list[CallAnalyticsJobSummaryDict]]
