from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_job_status import JobJobStatusOrStr


class JobJob(SdkBaseModel):
    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    id: Optional[int] = UNSET
    name: Optional[str] = UNSET
    status: Optional[JobJobStatusOrStr] = UNSET
    updated_at: Optional[str] = Field(default=UNSET, alias="updatedAt")
    user_id: Optional[str] = Field(default=UNSET, alias="userId")


class JobJobDict(TypedDict):
    created_at: NotRequired[str]
    id: NotRequired[int]
    name: NotRequired[str]
    status: NotRequired[JobJobStatusOrStr]
    updated_at: NotRequired[str]
    user_id: NotRequired[str]
