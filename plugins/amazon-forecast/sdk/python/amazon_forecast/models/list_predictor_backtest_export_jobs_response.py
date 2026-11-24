from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .predictor_backtest_export_job_summary import (
    PredictorBacktestExportJobSummary,
    PredictorBacktestExportJobSummaryDict,
)


class ListPredictorBacktestExportJobsResponse(SdkBaseModel):
    predictor_backtest_export_jobs: Optional[list[PredictorBacktestExportJobSummary]] = Field(
        default=UNSET, alias="PredictorBacktestExportJobs"
    )
    """An array of objects that summarize the properties of each predictor backtest export job."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next
    request."""


class ListPredictorBacktestExportJobsResponseDict(TypedDict):
    predictor_backtest_export_jobs: NotRequired[list[PredictorBacktestExportJobSummaryDict]]
    next_token: NotRequired[str]
