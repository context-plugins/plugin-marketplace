from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task_trace import TaskTrace, TaskTraceDict


class PaginatedResponseTaskTrace(SdkBaseModel):
    items: list[TaskTrace]
    total: int
    limit: int
    offset: int


class PaginatedResponseTaskTraceDict(TypedDict):
    items: list[TaskTraceDict]
    total: int
    limit: int
    offset: int
