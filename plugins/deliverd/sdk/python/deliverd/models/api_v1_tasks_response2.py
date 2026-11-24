from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .task import Task, TaskDict


class ApiV1TasksResponse2(SdkBaseModel):
    tasks: list[Task]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1TasksResponse2Dict(TypedDict):
    tasks: list[TaskDict]
    next_cursor: str | None
