from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .task_activity_event import TaskActivityEvent, TaskActivityEventDict
from .unions.column_values import ColumnValues, ColumnValuesDict


class TaskResponse(SdkBaseModel):
    id: UUID
    taskset_id: UUID
    name: str
    description: Optional[str] = UNSET
    latest_version_id: Optional[UUID] = UNSET
    external_id: Optional[str] = UNSET
    column_values: Optional[dict[str, ColumnValues]] = UNSET
    binarized: bool = False
    tags: Optional[list[str]] = UNSET
    assignee_user_id: Optional[UUID] = UNSET
    activity_log: Optional[list[TaskActivityEvent]] = UNSET
    created_at: RFC3339DateTime


class TaskResponseDict(TypedDict):
    id: UUID
    taskset_id: UUID
    name: str
    description: NotRequired[str]
    latest_version_id: NotRequired[UUID]
    external_id: NotRequired[str]
    column_values: NotRequired[dict[str, ColumnValuesDict]]
    binarized: NotRequired[bool]
    tags: NotRequired[list[str]]
    assignee_user_id: NotRequired[UUID]
    activity_log: NotRequired[list[TaskActivityEventDict]]
    created_at: RFC3339DateTime
