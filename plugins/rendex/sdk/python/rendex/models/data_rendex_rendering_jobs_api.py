from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_rendex_rendering_jobs_api import StatusRendexRenderingJobsApiOrStr
from .job import Job, JobDict


class DataRendexRenderingJobsApi(SdkBaseModel):
    batch_id: Optional[str] = Field(default=UNSET, alias="batchId")
    """Unique batch identifier"""

    status: Optional[StatusRendexRenderingJobsApiOrStr] = UNSET
    """Overall batch status"""

    total_urls: Optional[int] = Field(default=UNSET, alias="totalUrls")
    """Total URLs in the batch"""

    completed: Optional[int] = UNSET
    """Number of completed captures"""

    failed: Optional[int] = UNSET
    """Number of failed captures"""

    jobs: Optional[list[Job]] = UNSET
    """Per-URL job statuses"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    completed_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")


class DataRendexRenderingJobsApiDict(TypedDict):
    batch_id: NotRequired[str]
    status: NotRequired[StatusRendexRenderingJobsApiOrStr]
    total_urls: NotRequired[int]
    completed: NotRequired[int]
    failed: NotRequired[int]
    jobs: NotRequired[list[JobDict]]
    created_at: NotRequired[RFC3339DateTime]
    completed_at: NotRequired[RFC3339DateTime]
