from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceBranch(SdkBaseModel):
    """A reference to a VCS Branch."""

    model_config = ConfigDict(extra="forbid")

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    name: str
    """The name of the entity referenced."""

    url: str
    """The external URL for the Branch."""


class HistoryReferenceBranchDict(TypedDict):
    id: IdDict
    entity_type: str
    name: str
    url: str
