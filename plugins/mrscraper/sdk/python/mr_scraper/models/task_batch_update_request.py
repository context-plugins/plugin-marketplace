from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_batch_update_task_swagger import TaskBatchUpdateTaskSwagger, TaskBatchUpdateTaskSwaggerDict


class TaskBatchUpdateRequest(SdkBaseModel):
    """Batch update request containing an array of task updates"""

    data: Optional[list[TaskBatchUpdateTaskSwagger]] = UNSET


class TaskBatchUpdateRequestDict(TypedDict):
    data: NotRequired[list[TaskBatchUpdateTaskSwaggerDict]]
