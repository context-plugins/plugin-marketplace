from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class RolloutResponse(SdkBaseModel):
    job_id: UUID
    trace_id: UUID
    status: str = "queued"


class RolloutResponseDict(TypedDict):
    job_id: UUID
    trace_id: UUID
    status: NotRequired[str]
