from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_changes_task import HistoryChangesTask, HistoryChangesTaskDict


class HistoryActionTaskUpdate(SdkBaseModel):
    """An action representing a Task being updated."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["update"] = "update"
    """The action of the entity referenced."""

    changes: HistoryChangesTask
    """The changes that have occurred as a result of the action."""

    complete: Optional[bool] = UNSET
    """Whether or not the Task is complete."""

    description: str
    """The description of the Task."""

    story_id: int
    """The Story ID that contains the Task."""


class HistoryActionTaskUpdateDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["update"]
    changes: HistoryChangesTaskDict
    complete: NotRequired[bool]
    description: str
    story_id: int
