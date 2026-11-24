from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tasksupport import TasksupportOrStr


class ToolExecution(SdkBaseModel):
    """Execution-related properties for a tool."""

    task_support: Optional[TasksupportOrStr] = Field(default=UNSET, alias="taskSupport")


class ToolExecutionDict(TypedDict):
    task_support: NotRequired[TasksupportOrStr]
