from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_parallel_ai_tasks_api import StatusParallelAiTasksApiOrStr
from .error import Error, ErrorDict
from .unions.metadata1 import Metadata1, Metadata1Dict
from .warning_parallel_ai_tasks_api import WarningParallelAiTasksApi, WarningParallelAiTasksApiDict


class TaskRun(SdkBaseModel):
    """Status of a task run."""

    run_id: str
    """ID of the task run."""

    interaction_id: str
    """Identifier for this interaction. Pass this value as ``previous_interaction_id`` to reuse context for a future
    request."""

    status: StatusParallelAiTasksApiOrStr
    """Status of the run."""

    is_active: bool
    """Whether the run is currently active, i.e. status is one of {'cancelling', 'queued', 'running'}."""

    warnings: Optional[list[WarningParallelAiTasksApi]] = UNSET
    """Warnings for the run, if any."""

    error: Optional[Error] = UNSET
    """Error for the run, present only if status is 'failed'."""

    processor: str
    """Processor used for the run."""

    metadata: Optional[dict[str, Metadata1]] = UNSET
    """User-provided metadata stored with the run."""

    taskgroup_id: Optional[str] = UNSET
    """ID of the taskgroup to which the run belongs."""

    created_at: str
    """Timestamp of the creation of the task, as an RFC 3339 string."""

    modified_at: str
    """Timestamp of the last modification to the task, as an RFC 3339 string."""


class TaskRunDict(TypedDict):
    run_id: str
    interaction_id: str
    status: StatusParallelAiTasksApiOrStr
    is_active: bool
    warnings: NotRequired[list[WarningParallelAiTasksApiDict]]
    error: NotRequired[ErrorDict]
    processor: str
    metadata: NotRequired[dict[str, Metadata1Dict]]
    taskgroup_id: NotRequired[str]
    created_at: str
    modified_at: str
