from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.verb1 import Verb1OrStr
from .history_changes_story_link import HistoryChangesStoryLink, HistoryChangesStoryLinkDict


class HistoryActionStoryLinkUpdate(SdkBaseModel):
    """An action representing a Story Link being updated."""

    model_config = ConfigDict(extra="forbid")

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["update"] = "update"
    """The action of the entity referenced."""

    verb: Verb1OrStr
    """The verb describing the link's relationship."""

    subject_id: int
    """The Story ID of the subject Story."""

    object_id: int
    """The Story ID of the object Story."""

    changes: HistoryChangesStoryLink
    """The changes that have occurred as a result of the action."""


class HistoryActionStoryLinkUpdateDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["update"]
    verb: Verb1OrStr
    subject_id: int
    object_id: int
    changes: HistoryChangesStoryLinkDict
