from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_group_status2 import TaskGroupStatus2, TaskGroupStatus2Dict


class TaskGroupStatusEvent(SdkBaseModel):
    """Event indicating an update to group status."""

    type_: Literal["task_group_status"] = Field(default="task_group_status", alias="type")
    """Event type; always 'task_group_status'."""

    event_id: str
    """Cursor to resume the event stream."""

    status: TaskGroupStatus2
    """Task group status object."""


class TaskGroupStatusEventDict(TypedDict):
    type_: Literal["task_group_status"]
    event_id: str
    status: TaskGroupStatus2Dict
