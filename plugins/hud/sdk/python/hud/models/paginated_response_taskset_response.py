from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .taskset_response import TasksetResponse, TasksetResponseDict


class PaginatedResponseTasksetResponse(SdkBaseModel):
    items: list[TasksetResponse]
    total: int
    limit: int
    offset: int


class PaginatedResponseTasksetResponseDict(TypedDict):
    items: list[TasksetResponseDict]
    total: int
    limit: int
    offset: int
