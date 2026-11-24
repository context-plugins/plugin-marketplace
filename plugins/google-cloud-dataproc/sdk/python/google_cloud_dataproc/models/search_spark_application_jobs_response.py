from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_data import JobData, JobDataDict


class SearchSparkApplicationJobsResponse(SdkBaseModel):
    """A list of Jobs associated with a Spark Application."""

    spark_application_jobs: Optional[list[JobData]] = Field(default=UNSET, alias="sparkApplicationJobs")
    """Output only. Data corresponding to a spark job."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSparkApplicationJobsRequest."""


class SearchSparkApplicationJobsResponseDict(TypedDict):
    spark_application_jobs: NotRequired[list[JobDataDict]]
    next_page_token: NotRequired[str]
