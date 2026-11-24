from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionLabelCreate(SdkBaseModel):
    """An action representing a Label being created."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["create"] = "create"
    """The action of the entity referenced."""

    app_url: str
    """The application URL of the Label."""

    name: str
    """The name of the Label."""


class HistoryActionLabelCreateDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["create"]
    app_url: str
    name: str
