from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_task import TaskTask, TaskTaskDict


class TasksStatusResponse(SdkBaseModel):
    data: Optional[TaskTask] = UNSET
    message: Optional[str] = UNSET


class TasksStatusResponseDict(TypedDict):
    data: NotRequired[TaskTaskDict]
    message: NotRequired[str]
