from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_job import JobJob, JobJobDict


class JobsResponse1(SdkBaseModel):
    data: Optional[JobJob] = UNSET
    message: Optional[str] = UNSET


class JobsResponse1Dict(TypedDict):
    data: NotRequired[JobJobDict]
    message: NotRequired[str]
