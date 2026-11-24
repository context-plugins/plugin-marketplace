from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryReferenceGroup(SdkBaseModel):
    """A reference to a Group."""

    id: UUID
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    name: str
    """The name of the entity referenced."""


class HistoryReferenceGroupDict(TypedDict):
    id: UUID
    entity_type: str
    name: str
