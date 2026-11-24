from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceProject(SdkBaseModel):
    """A reference to an Project."""

    model_config = ConfigDict(extra="forbid")

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    app_url: str
    """The application URL of the Project."""

    name: str
    """The name of the entity referenced."""


class HistoryReferenceProjectDict(TypedDict):
    id: IdDict
    entity_type: str
    app_url: str
    name: str
