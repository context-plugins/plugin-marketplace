from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionLabelDelete(SdkBaseModel):
    """An action representing a Label being deleted."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["delete"] = "delete"
    """The action of the entity referenced."""

    name: str
    """The name of the Label."""


class HistoryActionLabelDeleteDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["delete"]
    name: str
