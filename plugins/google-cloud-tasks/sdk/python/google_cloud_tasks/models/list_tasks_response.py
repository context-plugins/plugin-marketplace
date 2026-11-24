from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task import Task, TaskDict


class ListTasksResponse(SdkBaseModel):
    """Response message for listing tasks using ListTasks."""

    tasks: Optional[list[Task]] = UNSET
    """The list of tasks."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve next page of results. To return the next page of results, call ListTasks with this value as
    the page_token. If the next_page_token is empty, there are no more results."""


class ListTasksResponseDict(TypedDict):
    tasks: NotRequired[list[TaskDict]]
    next_page_token: NotRequired[str]
