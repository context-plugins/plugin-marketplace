from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceCommit(SdkBaseModel):
    """A reference to a VCS Commit."""

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    message: str
    """The message from the Commit."""

    url: str
    """The external URL for the Branch."""


class HistoryReferenceCommitDict(TypedDict):
    id: IdDict
    entity_type: str
    message: str
    url: str
