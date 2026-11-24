from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .forecast_export_job_summary import ForecastExportJobSummary, ForecastExportJobSummaryDict


class ListForecastExportJobsResponse(SdkBaseModel):
    forecast_export_jobs: Optional[list[ForecastExportJobSummary]] = Field(default=UNSET, alias="ForecastExportJobs")
    """An array of objects that summarize each export job's properties."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request."""


class ListForecastExportJobsResponseDict(TypedDict):
    forecast_export_jobs: NotRequired[list[ForecastExportJobSummaryDict]]
    next_token: NotRequired[str]
