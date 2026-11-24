from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status21 import JobStatus21OrStr


class StopEventsDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier of the events detection job to stop."""

    job_status: Optional[JobStatus21OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the events detection job."""


class StopEventsDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_status: NotRequired[JobStatus21OrStr]
