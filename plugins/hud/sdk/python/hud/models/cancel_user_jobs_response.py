from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .cancel_user_jobs_job_detail import CancelUserJobsJobDetail, CancelUserJobsJobDetailDict


class CancelUserJobsResponse(SdkBaseModel):
    """"Stop everything" result, grouped by job so callers can show a breakdown."""

    status: str = "accepted"
    jobs_cancelled: int
    total_tasks_cancelled: int
    job_details: list[CancelUserJobsJobDetail]


class CancelUserJobsResponseDict(TypedDict):
    status: NotRequired[str]
    jobs_cancelled: int
    total_tasks_cancelled: int
    job_details: list[CancelUserJobsJobDetailDict]
