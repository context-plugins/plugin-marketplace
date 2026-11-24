from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_message_move_tasks_result_entry import ListMessageMoveTasksResultEntry, ListMessageMoveTasksResultEntryDict


class ListMessageMoveTasksResult(SdkBaseModel):
    results: Optional[list[ListMessageMoveTasksResultEntry]] = Field(default=UNSET, alias="Results")
    """A list of message movement tasks and their attributes."""


class ListMessageMoveTasksResultDict(TypedDict):
    results: NotRequired[list[ListMessageMoveTasksResultEntryDict]]
