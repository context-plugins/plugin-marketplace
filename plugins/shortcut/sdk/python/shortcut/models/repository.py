from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.type_shortcut_repositories_api import TypeShortcutRepositoriesApiOrStr


class Repository(SdkBaseModel):
    """Repository refers to a VCS repository."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    name: str | None
    """The shorthand name of the VCS repository."""

    type_: TypeShortcutRepositoriesApiOrStr = Field(alias="type")
    """The VCS provider for the Repository."""

    updated_at: RFC3339DateTime | None
    """The time/date the Repository was updated."""

    external_id: str | None
    """The VCS unique identifier for the Repository."""

    id: int | None
    """The ID associated to the VCS repository in Shortcut."""

    url: str | None
    """The URL of the Repository."""

    full_name: str | None
    """The full name of the VCS repository."""

    created_at: RFC3339DateTime | None
    """The time/date the Repository was created."""


class RepositoryDict(TypedDict):
    entity_type: str
    name: str | None
    type_: TypeShortcutRepositoriesApiOrStr
    updated_at: RFC3339DateTime | None
    external_id: str | None
    id: int | None
    url: str | None
    full_name: str | None
    created_at: RFC3339DateTime | None
