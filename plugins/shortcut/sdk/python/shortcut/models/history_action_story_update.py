from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.story_type1 import StoryType1OrStr
from .history_changes_story import HistoryChangesStory, HistoryChangesStoryDict


class HistoryActionStoryUpdate(SdkBaseModel):
    """An action representing a Story being updated."""

    model_config = ConfigDict(extra="forbid")

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["update"] = "update"
    """The action of the entity referenced."""

    app_url: str
    """The application URL of the Story."""

    changes: Optional[HistoryChangesStory] = UNSET
    """The changes that have occurred as a result of the action."""

    name: str
    """The name of the Story."""

    story_type: StoryType1OrStr
    """The type of Story; either feature, bug, or chore."""

    parent_story_id: Optional[int] = UNSET
    """The Story's Parent ID (only applicable if Story is a Sub-task)"""


class HistoryActionStoryUpdateDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["update"]
    app_url: str
    changes: NotRequired[HistoryChangesStoryDict]
    name: str
    story_type: StoryType1OrStr
    parent_story_id: NotRequired[int]
