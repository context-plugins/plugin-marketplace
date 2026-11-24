from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status31 import JobStatus31OrStr


class StopPiiEntitiesDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier of the PII entities detection job to stop."""

    job_status: Optional[JobStatus31OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the PII entities detection job."""


class StopPiiEntitiesDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_status: NotRequired[JobStatus31OrStr]
