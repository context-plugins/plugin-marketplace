from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_connect_jobs_api import StatusConnectJobsApiOrStr
from .enums.title import TitleOrStr
from .jobs_result import JobsResult, JobsResultDict


class JobsStep(SdkBaseModel):
    """List of steps that need to be completed."""

    title: Optional[TitleOrStr] = UNSET
    """Name of the step the job needs to complete."""

    status: StatusConnectJobsApiOrStr
    """Status of the job step"""

    result: JobsResult
    """Result object containing a list of URLs or null. Otherwise if a step failed contains an error response."""


class JobsStepDict(TypedDict):
    title: NotRequired[TitleOrStr]
    status: StatusConnectJobsApiOrStr
    result: JobsResultDict
