from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job import Job, JobDict


class V1JobsResponse1(SdkBaseModel):
    data: Optional[Job] = UNSET
    request_id: Optional[str] = UNSET


class V1JobsResponse1Dict(TypedDict):
    data: NotRequired[JobDict]
    request_id: NotRequired[str]
