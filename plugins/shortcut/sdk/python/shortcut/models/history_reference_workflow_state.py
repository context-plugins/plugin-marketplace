from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_shortcut_stories_api import TypeShortcutStoriesApiOrStr
from .unions.id import Id, IdDict


class HistoryReferenceWorkflowState(SdkBaseModel):
    """A references to a Story Workflow State."""

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    type_: TypeShortcutStoriesApiOrStr = Field(alias="type")
    """Either "backlog", "unstarted", "started", or "done"."""

    name: str
    """The name of the entity referenced."""


class HistoryReferenceWorkflowStateDict(TypedDict):
    id: IdDict
    entity_type: str
    type_: TypeShortcutStoriesApiOrStr
    name: str
