from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .taskset_coverage_task import TasksetCoverageTask, TasksetCoverageTaskDict


class TasksetCoverageResponse(SdkBaseModel):
    taskset_id: Optional[UUID] = UNSET
    taskset_name: Optional[str] = UNSET
    tasks: Optional[list[TasksetCoverageTask]] = UNSET
    total_tasks: int = 0
    tasks_with_traces: int = 0


class TasksetCoverageResponseDict(TypedDict):
    taskset_id: NotRequired[UUID]
    taskset_name: NotRequired[str]
    tasks: NotRequired[list[TasksetCoverageTaskDict]]
    total_tasks: NotRequired[int]
    tasks_with_traces: NotRequired[int]
