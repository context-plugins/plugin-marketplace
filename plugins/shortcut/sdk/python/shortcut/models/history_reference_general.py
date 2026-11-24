from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceGeneral(SdkBaseModel):
    """A default reference for entity types that don't have extra fields."""

    model_config = ConfigDict(extra="forbid")

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    name: str
    """The name of the entity referenced."""


class HistoryReferenceGeneralDict(TypedDict):
    id: IdDict
    entity_type: str
    name: str
