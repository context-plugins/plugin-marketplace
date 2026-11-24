from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_response import TaskResponse, TaskResponseDict
from .task_version_response import TaskVersionResponse, TaskVersionResponseDict


class TaskWithVersionResponse(SdkBaseModel):
    task: TaskResponse
    version: TaskVersionResponse


class TaskWithVersionResponseDict(TypedDict):
    task: TaskResponseDict
    version: TaskVersionResponseDict
