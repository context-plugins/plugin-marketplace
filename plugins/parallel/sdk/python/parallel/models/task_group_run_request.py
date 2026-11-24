from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_run_input import TaskRunInput, TaskRunInputDict
from .task_spec import TaskSpec, TaskSpecDict


class TaskGroupRunRequest(SdkBaseModel):
    """Request to initiate new task runs in a task group."""

    default_task_spec: Optional[TaskSpec] = UNSET
    """Default task spec to use for the runs. If task_spec is specified in a run, it overrides this default."""

    inputs: list[TaskRunInput]
    """List of task runs to execute. Up to 1,000 runs can be specified per request. If you'd like to add more runs,
    split them across multiple TaskGroup POST requests."""


class TaskGroupRunRequestDict(TypedDict):
    default_task_spec: NotRequired[TaskSpecDict]
    inputs: list[TaskRunInputDict]
