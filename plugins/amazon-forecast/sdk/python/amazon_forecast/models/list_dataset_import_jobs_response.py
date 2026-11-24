from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_import_job_summary import DatasetImportJobSummary, DatasetImportJobSummaryDict


class ListDatasetImportJobsResponse(SdkBaseModel):
    dataset_import_jobs: Optional[list[DatasetImportJobSummary]] = Field(default=UNSET, alias="DatasetImportJobs")
    """An array of objects that summarize each dataset import job's properties."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request."""


class ListDatasetImportJobsResponseDict(TypedDict):
    dataset_import_jobs: NotRequired[list[DatasetImportJobSummaryDict]]
    next_token: NotRequired[str]
