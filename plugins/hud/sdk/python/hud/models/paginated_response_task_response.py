from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_response import TaskResponse, TaskResponseDict


class PaginatedResponseTaskResponse(SdkBaseModel):
    items: list[TaskResponse]
    total: int
    limit: int
    offset: int


class PaginatedResponseTaskResponseDict(TypedDict):
    items: list[TaskResponseDict]
    total: int
    limit: int
    offset: int
