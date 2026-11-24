from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceEpic(SdkBaseModel):
    """A reference to an Epic."""

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    app_url: str
    """The application URL of the Epic."""

    name: str
    """The name of the entity referenced."""


class HistoryReferenceEpicDict(TypedDict):
    id: IdDict
    entity_type: str
    app_url: str
    name: str
