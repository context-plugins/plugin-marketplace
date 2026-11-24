from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.task_task_status import TaskTaskStatusOrStr


class TaskUpdateTaskStatusRequest(SdkBaseModel):
    result: Optional[str] = UNSET
    solution: Optional[str] = UNSET
    status: Optional[TaskTaskStatusOrStr] = UNSET
    task_details: Optional[Any] = Field(default=UNSET, alias="taskDetails")


class TaskUpdateTaskStatusRequestDict(TypedDict):
    result: NotRequired[str]
    solution: NotRequired[str]
    status: NotRequired[TaskTaskStatusOrStr]
    task_details: NotRequired[Any]
