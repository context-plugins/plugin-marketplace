from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sampling_statistic_summary import SamplingStatisticSummary, SamplingStatisticSummaryDict


class GetSamplingStatisticSummariesResult(SdkBaseModel):
    sampling_statistic_summaries: Optional[list[SamplingStatisticSummary]] = Field(
        default=UNSET, alias="SamplingStatisticSummaries"
    )
    """Information about the number of requests instrumented for each sampling rule."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetSamplingStatisticSummariesResultDict(TypedDict):
    sampling_statistic_summaries: NotRequired[list[SamplingStatisticSummaryDict]]
    next_token: NotRequired[str]
