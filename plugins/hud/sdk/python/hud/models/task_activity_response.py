from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_activity_event import TaskActivityEvent, TaskActivityEventDict


class TaskActivityResponse(SdkBaseModel):
    events: list[TaskActivityEvent]


class TaskActivityResponseDict(TypedDict):
    events: list[TaskActivityEventDict]
