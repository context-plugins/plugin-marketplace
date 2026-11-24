from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelUserJobsJobDetail(SdkBaseModel):
    job_id: UUID
    cancelled: int


class CancelUserJobsJobDetailDict(TypedDict):
    job_id: UUID
    cancelled: int
