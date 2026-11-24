from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TasksetCoverageTask(SdkBaseModel):
    task_id: UUID
    task_name: str
    task_version_id: Optional[UUID] = UNSET
    trace_count: int = 0
    avg_reward: Optional[float] = UNSET
    statuses: Optional[list[str]] = UNSET
    invalidated_count: int = 0


class TasksetCoverageTaskDict(TypedDict):
    task_id: UUID
    task_name: str
    task_version_id: NotRequired[UUID]
    trace_count: NotRequired[int]
    avg_reward: NotRequired[float]
    statuses: NotRequired[list[str]]
    invalidated_count: NotRequired[int]
