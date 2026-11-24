from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Icon(SdkBaseModel):
    """Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web
    application."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    id: UUID
    """The unique ID of the Icon."""

    created_at: RFC3339DateTime
    """The time/date that the Icon was created."""

    updated_at: RFC3339DateTime
    """The time/date that the Icon was updated."""

    url: str
    """The URL of the Icon."""


class IconDict(TypedDict):
    entity_type: str
    id: UUID
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    url: str
