from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistoryActionBranchCreate(SdkBaseModel):
    """An action representing a VCS Branch being created."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    name: str
    """The name of the VCS Branch that was pushed"""

    url: str
    """The URL from the provider of the VCS Branch that was pushed"""

    action: Literal["create"] = "create"
    """The action of the entity referenced."""


class HistoryActionBranchCreateDict(TypedDict):
    id: int
    entity_type: str
    name: str
    url: str
    action: Literal["create"]
