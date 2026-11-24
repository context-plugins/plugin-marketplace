from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.audience_size_status1 import AudienceSizeStatus1OrStr


class AudienceSizeJob(SdkBaseModel):
    """The status of an audience size job."""

    model_config = ConfigDict(extra="forbid")

    job_id: str = Field(alias="jobId")
    status: AudienceSizeStatus1OrStr
    """"pending": The job is running "success": The job is finished "failed": The job could not be completed
    "cancelled": The job was cancelled before it finished"""

    size: float | None
    """The size of the audience. Set if ``status`` is "success"."""

    evaluated_at: RFC3339DateTime | None = Field(alias="evaluatedAt")
    """The timestamp when the job finished. Set if ``status`` is "success"."""

    error: str | None
    """The reason the job failed. Set if ``status`` is "failed"."""


class AudienceSizeJobDict(TypedDict):
    job_id: str
    status: AudienceSizeStatus1OrStr
    size: float | None
    evaluated_at: RFC3339DateTime | None
    error: str | None
