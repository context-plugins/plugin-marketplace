from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status27 import JobStatus27OrStr


class StopDominantLanguageDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier of the dominant language detection job to stop."""

    job_status: Optional[JobStatus27OrStr] = Field(default=UNSET, alias="JobStatus")
    """Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the
    StopDominantLanguageDetectionJob operation."""


class StopDominantLanguageDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_status: NotRequired[JobStatus27OrStr]
