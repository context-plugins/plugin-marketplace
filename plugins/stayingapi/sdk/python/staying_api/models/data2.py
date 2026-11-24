from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .platform_failure_error import PlatformFailureError, PlatformFailureErrorDict


class Data2(SdkBaseModel):
    job_id: str = Field(alias="jobId")
    status: Literal["failed"] = "failed"
    error: PlatformFailureError


class Data2Dict(TypedDict):
    job_id: str
    status: Literal["failed"]
    error: PlatformFailureErrorDict
