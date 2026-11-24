from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_run1 import TaskRun1, TaskRun1Dict
from .unions.output_parallel_ai_tasks_api import OutputParallelAiTasksApi, OutputParallelAiTasksApiDict


class TaskRunResult(SdkBaseModel):
    """Result of a task run."""

    run: TaskRun1
    """Task run object with status 'completed'."""

    output: OutputParallelAiTasksApi
    """Output from the task conforming to the output schema."""


class TaskRunResultDict(TypedDict):
    run: TaskRun1Dict
    output: OutputParallelAiTasksApiDict
