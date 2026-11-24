from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobSummary(SdkBaseModel):
    job_id: UUID
    total_traces: int = 0
    total_tasks: int = 0
    completed: int = 0
    running: int = 0
    pending: int = 0
    initializing: int = 0
    cancelling: int = 0
    error: int = 0
    cancelled: int = 0
    avg_reward: Optional[float] = UNSET


class JobSummaryDict(TypedDict):
    job_id: UUID
    total_traces: NotRequired[int]
    total_tasks: NotRequired[int]
    completed: NotRequired[int]
    running: NotRequired[int]
    pending: NotRequired[int]
    initializing: NotRequired[int]
    cancelling: NotRequired[int]
    error: NotRequired[int]
    cancelled: NotRequired[int]
    avg_reward: NotRequired[float]
