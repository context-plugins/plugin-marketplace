from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TaskList(SdkBaseModel):
    name: str
    """The name of the task list."""


class TaskListDict(TypedDict):
    name: str
