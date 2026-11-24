from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_group_status3 import TaskGroupStatus3, TaskGroupStatus3Dict
from .unions.metadata1 import Metadata1, Metadata1Dict


class TaskGroupResponse(SdkBaseModel):
    """Response object for a task group, including its status and metadata."""

    taskgroup_id: str
    """ID of the group."""

    metadata: Optional[dict[str, Metadata1]] = UNSET
    """User-provided metadata stored with the group."""

    status: TaskGroupStatus3
    """Status of the group."""

    created_at: str
    """Timestamp of the creation of the group, as an RFC 3339 string."""


class TaskGroupResponseDict(TypedDict):
    taskgroup_id: str
    metadata: NotRequired[dict[str, Metadata1Dict]]
    status: TaskGroupStatus3Dict
    created_at: str
