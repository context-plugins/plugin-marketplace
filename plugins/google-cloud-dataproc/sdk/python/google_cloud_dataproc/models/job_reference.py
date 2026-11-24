from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobReference(SdkBaseModel):
    """Encapsulates the full scoping used to reference a job."""

    job_id: Optional[str] = Field(default=UNSET, alias="jobId")
    """Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z),
    numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller,
    the job ID will be provided by the server."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the
    request project ID."""


class JobReferenceDict(TypedDict):
    job_id: NotRequired[str]
    project_id: NotRequired[str]
