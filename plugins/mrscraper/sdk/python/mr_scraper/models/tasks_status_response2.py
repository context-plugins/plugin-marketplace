from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_task_queued_response import TaskTaskQueuedResponse, TaskTaskQueuedResponseDict


class TasksStatusResponse2(SdkBaseModel):
    data: Optional[TaskTaskQueuedResponse] = UNSET
    message: Optional[str] = UNSET


class TasksStatusResponse2Dict(TypedDict):
    data: NotRequired[TaskTaskQueuedResponseDict]
    message: NotRequired[str]
