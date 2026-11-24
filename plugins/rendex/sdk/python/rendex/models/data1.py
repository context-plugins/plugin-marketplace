from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status2_rendex_rendering_jobs_api import Status2RendexRenderingJobsApiOrStr


class Data1(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="jobId")
    """Unique job identifier"""

    status: Optional[Status2RendexRenderingJobsApiOrStr] = UNSET
    """Current job status"""

    url: Optional[str] = UNSET
    """URL that was captured"""

    image_url: Optional[str] = Field(default=UNSET, alias="imageUrl")
    """Signed URL to the captured image (available when completed)"""

    error: Optional[str] = UNSET
    """Error message (available when failed)"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    completed_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")


class Data1Dict(TypedDict):
    job_id: NotRequired[str]
    status: NotRequired[Status2RendexRenderingJobsApiOrStr]
    url: NotRequired[str]
    image_url: NotRequired[str]
    error: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    completed_at: NotRequired[RFC3339DateTime]
