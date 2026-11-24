from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.verb1 import Verb1OrStr


class HistoryActionStoryLinkDelete(SdkBaseModel):
    """An action representing a Story Link being deleted."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["delete"] = "delete"
    """The action of the entity referenced."""

    verb: Verb1OrStr
    """The verb describing the link's relationship."""

    subject_id: int | None
    """The Story ID of the subject Story."""

    object_id: int | None
    """The Story ID of the object Story."""


class HistoryActionStoryLinkDeleteDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["delete"]
    verb: Verb1OrStr
    subject_id: int | None
    object_id: int | None
