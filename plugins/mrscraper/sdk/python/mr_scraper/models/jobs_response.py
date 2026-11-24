from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_t_pagination_meta import ApiTPaginationMeta, ApiTPaginationMetaDict
from .job_job import JobJob, JobJobDict


class JobsResponse(SdkBaseModel):
    data: Optional[list[JobJob]] = UNSET
    meta: Optional[ApiTPaginationMeta] = UNSET


class JobsResponseDict(TypedDict):
    data: NotRequired[list[JobJobDict]]
    meta: NotRequired[ApiTPaginationMetaDict]
