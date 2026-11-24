from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_list import TaskList, TaskListDict


class PollForActivityTaskInput(SdkBaseModel):
    domain: str
    """The name of the domain that contains the task lists being polled."""

    task_list: TaskList = Field(alias="taskList")
    identity: Optional[str] = UNSET
    """Identity of the worker making the request, recorded in the ActivityTaskStarted event in the workflow history.
    This enables diagnostic tracing when problems arise. The form of this identity is user defined."""


class PollForActivityTaskInputDict(TypedDict):
    domain: str
    task_list: TaskListDict
    identity: NotRequired[str]
