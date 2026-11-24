from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobTaskCoverage(SdkBaseModel):
    task_id: UUID
    task_name: str
    trace_count: int
    avg_reward: Optional[float] = UNSET
    statuses: Optional[list[str]] = UNSET
    invalidated_count: int = 0


class JobTaskCoverageDict(TypedDict):
    task_id: UUID
    task_name: str
    trace_count: int
    avg_reward: NotRequired[float]
    statuses: NotRequired[list[str]]
    invalidated_count: NotRequired[int]
