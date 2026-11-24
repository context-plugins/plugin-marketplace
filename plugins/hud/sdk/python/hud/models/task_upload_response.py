from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_upload_result import TaskUploadResult, TaskUploadResultDict


class TaskUploadResponse(SdkBaseModel):
    taskset_id: UUID
    taskset_name: str
    task_count: int
    tasks: list[TaskUploadResult]
    """One result per uploaded item, in order"""

    tasks_created: int
    tasks_updated: int


class TaskUploadResponseDict(TypedDict):
    taskset_id: UUID
    taskset_name: str
    task_count: int
    tasks: list[TaskUploadResultDict]
    tasks_created: int
    tasks_updated: int
