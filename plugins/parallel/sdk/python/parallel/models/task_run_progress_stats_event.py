from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_run_source_stats2 import TaskRunSourceStats2, TaskRunSourceStats2Dict


class TaskRunProgressStatsEvent(SdkBaseModel):
    """A progress update for a task run."""

    type_: Literal["task_run.progress_stats"] = Field(default="task_run.progress_stats", alias="type")
    """Event type; always 'task_run.progress_stats'."""

    source_stats: TaskRunSourceStats2
    """Source stats describing progress so far."""

    progress_meter: float
    """Completion percentage of the task run. Ranges from 0 to 100 where 0 indicates no progress and 100 indicates
    completion."""


class TaskRunProgressStatsEventDict(TypedDict):
    type_: Literal["task_run.progress_stats"]
    source_stats: TaskRunSourceStats2Dict
    progress_meter: float
