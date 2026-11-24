from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionLabelUpdate(SdkBaseModel):
    """An action representing a Label being updated."""

    model_config = ConfigDict(extra="forbid")

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: Literal["update"] = "update"
    """The action of the entity referenced."""


class HistoryActionLabelUpdateDict(TypedDict):
    id: int
    entity_type: str
    action: Literal["update"]
