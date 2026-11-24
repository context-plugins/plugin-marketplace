from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rollout_response import RolloutResponse, RolloutResponseDict


class RolloutBatchResponse(SdkBaseModel):
    job_id: UUID
    accepted: int
    rejected: int
    traces: Optional[list[RolloutResponse]] = UNSET


class RolloutBatchResponseDict(TypedDict):
    job_id: UUID
    accepted: int
    rejected: int
    traces: NotRequired[list[RolloutResponseDict]]
