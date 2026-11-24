from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_rendex_rendering_jobs_api import Status1RendexRenderingJobsApiOrStr


class Job(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="jobId")
    url: Optional[str] = UNSET
    status: Optional[Status1RendexRenderingJobsApiOrStr] = UNSET
    image_url: Optional[str] = Field(default=UNSET, alias="imageUrl")
    error: Optional[str] = UNSET


class JobDict(TypedDict):
    job_id: NotRequired[str]
    url: NotRequired[str]
    status: NotRequired[Status1RendexRenderingJobsApiOrStr]
    image_url: NotRequired[str]
    error: NotRequired[str]
