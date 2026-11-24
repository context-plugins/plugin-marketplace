from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.story_type1 import StoryType1OrStr


class HistoryActionStoryDelete(SdkBaseModel):
    """An action representing a Story being deleted."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["delete"] = "delete"
    """The action of the entity referenced."""

    name: str
    """The name of the Story."""

    story_type: StoryType1OrStr
    """The type of Story; either feature, bug, or chore."""

    parent_story_id: Optional[int] = UNSET
    """The Story's Parent ID (only applicable if Story is a Sub-task)"""


class HistoryActionStoryDeleteDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["delete"]
    name: str
    story_type: StoryType1OrStr
    parent_story_id: NotRequired[int]
