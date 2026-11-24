from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionTaskDelete(SdkBaseModel):
    """An action representing a Task being deleted."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["delete"] = "delete"
    """The action of the entity referenced."""

    description: str
    """The description of the Task being deleted."""


class HistoryActionTaskDeleteDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["delete"]
    description: str
