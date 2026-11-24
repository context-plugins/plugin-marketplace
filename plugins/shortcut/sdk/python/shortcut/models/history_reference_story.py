from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.story_type4 import StoryType4OrStr
from .unions.id import Id, IdDict


class HistoryReferenceStory(SdkBaseModel):
    """A reference to a Story."""

    model_config = ConfigDict(extra="forbid")

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    app_url: str
    """The application URL of the Story."""

    name: str
    """The name of the entity referenced."""

    story_type: StoryType4OrStr
    """If the referenced entity is a Story, either "bug", "chore", or "feature"."""

    parent_story_id: Optional[int] = UNSET
    """The Story's Parent ID (only applicable if Story is a Sub-task)"""


class HistoryReferenceStoryDict(TypedDict):
    id: IdDict
    entity_type: str
    app_url: str
    name: str
    story_type: StoryType4OrStr
    parent_story_id: NotRequired[int]
