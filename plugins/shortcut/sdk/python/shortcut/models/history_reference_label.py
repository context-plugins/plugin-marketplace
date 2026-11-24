from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceLabel(SdkBaseModel):
    """A reference to an Label."""

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    app_url: str
    """The application URL of the Label."""

    name: str
    """The name of the entity referenced."""


class HistoryReferenceLabelDict(TypedDict):
    id: IdDict
    entity_type: str
    app_url: str
    name: str
