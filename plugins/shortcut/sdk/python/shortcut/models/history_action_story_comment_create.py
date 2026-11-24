from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionStoryCommentCreate(SdkBaseModel):
    """An action representing a Story Comment being created."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["create"] = "create"
    """The action of the entity referenced."""

    app_url: str
    """The application URL of the Story Comment."""

    author_id: UUID
    """The Member ID of who created the Story Comment."""


class HistoryActionStoryCommentCreateDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["create"]
    app_url: str
    author_id: UUID
