from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TaskGroupStatus(SdkBaseModel):
    """Status of a task group."""

    num_task_runs: int
    """Number of task runs in the group."""

    task_run_status_counts: dict[str, int]
    """Number of task runs with each status."""

    is_active: bool
    """True if at least one run in the group is currently active, i.e. status is one of {'cancelling', 'queued',
    'running'}."""

    status_message: str
    """Human-readable status message for the group."""

    modified_at: str
    """Timestamp of the last status update to the group, as an RFC 3339 string."""


class TaskGroupStatusDict(TypedDict):
    num_task_runs: int
    task_run_status_counts: dict[str, int]
    is_active: bool
    status_message: str
    modified_at: str
