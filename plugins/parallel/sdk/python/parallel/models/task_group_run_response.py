from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_group_status3 import TaskGroupStatus3, TaskGroupStatus3Dict


class TaskGroupRunResponse(SdkBaseModel):
    """Response from adding new task runs to a task group."""

    status: TaskGroupStatus3
    """Status of the group."""

    run_ids: list[str]
    """IDs of the newly created runs."""

    run_cursor: str
    """Cursor for these runs in the run stream at taskgroup/runs?last_event_id=<run_cursor>. Empty for the first runs in
    the group."""

    event_cursor: str
    """Cursor for these runs in the event stream at taskgroup/events?last_event_id=<event_cursor>. Empty for the first
    runs in the group."""


class TaskGroupRunResponseDict(TypedDict):
    status: TaskGroupStatus3Dict
    run_ids: list[str]
    run_cursor: str
    event_cursor: str
