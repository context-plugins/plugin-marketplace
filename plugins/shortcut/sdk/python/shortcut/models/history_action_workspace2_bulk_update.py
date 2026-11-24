from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionWorkspace2BulkUpdate(SdkBaseModel):
    """An action representing a bulk operation within a workspace2."""

    id: UUID
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["bulk-update"] = "bulk-update"
    """The action of the entity referenced."""

    name: str
    """The name of the workspace2 in which the BulkUpdate occurred."""


class HistoryActionWorkspace2BulkUpdateDict(TypedDict):
    id: UUID
    entity_type: str
    action: Literal["bulk-update"]
    name: str
