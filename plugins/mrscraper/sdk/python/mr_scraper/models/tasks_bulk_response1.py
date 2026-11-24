from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_batch_create_response import TaskBatchCreateResponse, TaskBatchCreateResponseDict


class TasksBulkResponse1(SdkBaseModel):
    data: Optional[TaskBatchCreateResponse] = UNSET
    """Response containing created tasks count and task details"""

    message: Optional[str] = UNSET


class TasksBulkResponse1Dict(TypedDict):
    data: NotRequired[TaskBatchCreateResponseDict]
    message: NotRequired[str]
