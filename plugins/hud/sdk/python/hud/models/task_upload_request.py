from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_upload_item import TaskUploadItem, TaskUploadItemDict


class TaskUploadRequest(SdkBaseModel):
    taskset_name: Optional[str] = UNSET
    """The team taskset to upload to, created when absent; required without taskset_id"""

    taskset_id: Optional[UUID] = UNSET
    """The taskset to upload to; taskset_name is then ignored"""

    description: Optional[str] = UNSET
    registry_id: Optional[UUID] = UNSET
    project_id: Optional[UUID] = UNSET
    tasks: list[TaskUploadItem]


class TaskUploadRequestDict(TypedDict):
    taskset_name: NotRequired[str]
    taskset_id: NotRequired[UUID]
    description: NotRequired[str]
    registry_id: NotRequired[UUID]
    project_id: NotRequired[UUID]
    tasks: list[TaskUploadItemDict]
