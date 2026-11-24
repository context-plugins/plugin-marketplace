from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_task_swagger import TaskTaskSwagger, TaskTaskSwaggerDict


class TaskBatchCreateRequest(SdkBaseModel):
    """Batch create request containing array of tasks"""

    data: Optional[list[TaskTaskSwagger]] = UNSET


class TaskBatchCreateRequestDict(TypedDict):
    data: NotRequired[list[TaskTaskSwaggerDict]]
