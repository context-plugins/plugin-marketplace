from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_task import TaskTask, TaskTaskDict


class TaskBatchCreateResponse(SdkBaseModel):
    """Response containing created tasks count and task details"""

    created: Optional[int] = UNSET
    tasks: Optional[list[TaskTask]] = UNSET


class TaskBatchCreateResponseDict(TypedDict):
    created: NotRequired[int]
    tasks: NotRequired[list[TaskTaskDict]]
