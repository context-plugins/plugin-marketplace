from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceStoryTask(SdkBaseModel):
    """A reference to a Story Task."""

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    description: str
    """The description of the Story Task."""


class HistoryReferenceStoryTaskDict(TypedDict):
    id: IdDict
    entity_type: str
    description: str
