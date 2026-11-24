from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionProjectUpdate(SdkBaseModel):
    """An action representing a Project being updated."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["update"] = "update"
    """The action of the entity referenced."""

    app_url: str
    """The application URL of the Project."""

    name: str
    """The name of the Project."""


class HistoryActionProjectUpdateDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["update"]
    app_url: str
    name: str
