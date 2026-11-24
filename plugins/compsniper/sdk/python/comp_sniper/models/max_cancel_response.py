from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MaxCancelResponse(SdkBaseModel):
    job_id: UUID = Field(alias="jobId")
    status: str
    cancel_requested: bool = Field(alias="cancelRequested")


class MaxCancelResponseDict(TypedDict):
    job_id: UUID
    status: str
    cancel_requested: bool
