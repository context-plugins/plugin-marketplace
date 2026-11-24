from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr


class Data(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="jobId")
    status: Optional[Status1OrStr] = UNSET
    poll_url: Optional[str] = Field(default=UNSET, alias="pollUrl")
    estimated_seconds: Optional[int] = Field(default=UNSET, alias="estimatedSeconds")


class DataDict(TypedDict):
    job_id: NotRequired[str]
    status: NotRequired[Status1OrStr]
    poll_url: NotRequired[str]
    estimated_seconds: NotRequired[int]
