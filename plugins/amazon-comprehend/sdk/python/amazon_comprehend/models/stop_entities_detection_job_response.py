from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status28 import JobStatus28OrStr


class StopEntitiesDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier of the entities detection job to stop."""

    job_status: Optional[JobStatus28OrStr] = Field(default=UNSET, alias="JobStatus")
    """Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the
    StopEntitiesDetectionJob operation."""


class StopEntitiesDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_status: NotRequired[JobStatus28OrStr]
