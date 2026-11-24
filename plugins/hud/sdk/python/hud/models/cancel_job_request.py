from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelJobRequest(SdkBaseModel):
    job_id: UUID


class CancelJobRequestDict(TypedDict):
    job_id: UUID
