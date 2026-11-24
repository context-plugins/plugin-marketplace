from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_list import TaskList, TaskListDict


class CountPendingActivityTasksInput(SdkBaseModel):
    domain: str
    """The name of the domain that contains the task list."""

    task_list: TaskList = Field(alias="taskList")


class CountPendingActivityTasksInputDict(TypedDict):
    domain: str
    task_list: TaskListDict
