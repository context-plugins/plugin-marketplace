from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status1_staying_jobs_api import Status1StayingJobsApiOrStr


class DataStayingJobsApi(SdkBaseModel):
    job_id: str = Field(alias="jobId")
    status: Status1StayingJobsApiOrStr
    poll_url: str = Field(alias="pollUrl")
    estimated_seconds: int = Field(alias="estimatedSeconds")


class DataStayingJobsApiDict(TypedDict):
    job_id: str
    status: Status1StayingJobsApiOrStr
    poll_url: str
    estimated_seconds: int
