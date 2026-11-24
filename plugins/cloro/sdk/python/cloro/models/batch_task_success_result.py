from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .async_task_credits import AsyncTaskCredits, AsyncTaskCreditsDict
from .task import Task, TaskDict


class BatchTaskSuccessResult(SdkBaseModel):
    success: Literal["True"] = "True"
    """Indicates this task was created successfully."""

    index: int
    """The zero-based position of this task in the original request array."""

    task: Task
    credits: AsyncTaskCredits
    """Credit information for an async task."""


class BatchTaskSuccessResultDict(TypedDict):
    success: Literal["True"]
    index: int
    task: TaskDict
    credits: AsyncTaskCreditsDict
