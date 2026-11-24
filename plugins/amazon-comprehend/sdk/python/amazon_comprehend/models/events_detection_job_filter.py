from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.job_status10 import JobStatus10OrStr


class EventsDetectionJobFilter(SdkBaseModel):
    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """Filters on the name of the events detection job."""

    job_status: Optional[JobStatus10OrStr] = Field(default=UNSET, alias="JobStatus")
    """Filters the list of jobs based on job status. Returns only jobs with the specified status."""

    submit_time_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTimeBefore")
    """Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted
    before the specified time. Jobs are returned in ascending order, oldest to newest."""

    submit_time_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTimeAfter")
    """Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted
    after the specified time. Jobs are returned in descending order, newest to oldest."""


class EventsDetectionJobFilterDict(TypedDict):
    job_name: NotRequired[str]
    job_status: NotRequired[JobStatus10OrStr]
    submit_time_before: NotRequired[RFC3339DateTime]
    submit_time_after: NotRequired[RFC3339DateTime]
