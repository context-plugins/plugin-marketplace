from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .taskset_export_task import TasksetExportTask, TasksetExportTaskDict


class TasksetExportResponse(SdkBaseModel):
    """A taskset with its tasks in the task wire format (mirrors the upload shape)."""

    taskset_id: UUID
    name: str
    tasks: list[TasksetExportTask]


class TasksetExportResponseDict(TypedDict):
    taskset_id: UUID
    name: str
    tasks: list[TasksetExportTaskDict]
