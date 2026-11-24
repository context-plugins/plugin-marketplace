from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobReference2(SdkBaseModel):
    """Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the
    job resource. If this property is not specified when a job is created, the server generates a job_id."""

    job_id: Optional[str] = Field(default=UNSET, alias="jobId")
    """Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z),
    numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller,
    the job ID will be provided by the server."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the
    request project ID."""


class JobReference2Dict(TypedDict):
    job_id: NotRequired[str]
    project_id: NotRequired[str]
