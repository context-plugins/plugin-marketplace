from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelTaskScorePoint(SdkBaseModel):
    task_id: UUID
    avg_reward: float
    trace_count: int


class ModelTaskScorePointDict(TypedDict):
    task_id: UUID
    avg_reward: float
    trace_count: int
