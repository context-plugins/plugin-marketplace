from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_run2 import TaskRun2, TaskRun2Dict
from .task_run_input import TaskRunInput, TaskRunInputDict
from .unions.output2 import Output2, Output2Dict


class TaskRunEvent(SdkBaseModel):
    """Event when a task run transitions to a non-active status.

    May indicate completion, cancellation, or failure."""

    type_: Literal["task_run.state"] = Field(default="task_run.state", alias="type")
    """Event type; always 'task_run.state'."""

    event_id: str
    """Cursor to resume the event stream. Always empty for non Task Group runs."""

    input: Optional[TaskRunInput] = UNSET
    """Input to the run; included only if requested."""

    run: TaskRun2
    """Task run object."""

    output: Optional[Output2] = UNSET
    """Output from the run; included only if requested and if status == ``completed``."""


class TaskRunEventDict(TypedDict):
    type_: Literal["task_run.state"]
    event_id: str
    input: NotRequired[TaskRunInputDict]
    run: TaskRun2Dict
    output: NotRequired[Output2Dict]
