from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class LinkedFile(SdkBaseModel):
    """Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports
    linking files from Google Drive, Dropbox, Box, and by URL."""

    model_config = ConfigDict(extra="forbid")

    description: str | None
    """The description of the file."""

    entity_type: str
    """A string description of this resource."""

    story_ids: list[int]
    """The IDs of the stories this file is attached to."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    member_mention_ids: list[UUID]
    """The members that are mentioned in the description of the file."""

    name: str
    """The name of the linked file."""

    thumbnail_url: str | None
    """The URL of the file thumbnail, if the integration provided it."""

    type_: str = Field(alias="type")
    """The integration type (e.g. google, dropbox, box)."""

    size: int | None
    """The filesize, if the integration provided it."""

    uploader_id: UUID
    """The UUID of the member that uploaded the file."""

    content_type: str | None
    """The content type of the image (e.g. txt/plain)."""

    updated_at: RFC3339DateTime
    """The time/date the LinkedFile was updated."""

    group_mention_ids: list[UUID]
    """The groups that are mentioned in the description of the file."""

    id: int
    """The unique identifier for the file."""

    url: str
    """The URL of the file."""

    created_at: RFC3339DateTime
    """The time/date the LinkedFile was created."""


class LinkedFileDict(TypedDict):
    description: str | None
    entity_type: str
    story_ids: list[int]
    mention_ids: list[UUID]
    member_mention_ids: list[UUID]
    name: str
    thumbnail_url: str | None
    type_: str
    size: int | None
    uploader_id: UUID
    content_type: str | None
    updated_at: RFC3339DateTime
    group_mention_ids: list[UUID]
    id: int
    url: str
    created_at: RFC3339DateTime
