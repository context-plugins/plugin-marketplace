from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class UploadedFile(SdkBaseModel):
    """An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service
    are different: see the Linked Files endpoint."""

    model_config = ConfigDict(extra="forbid")

    description: str | None
    """The description of the file."""

    entity_type: str
    """A string description of this resource."""

    story_ids: list[int]
    """The unique IDs of the Stories associated with this file."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    member_mention_ids: list[UUID]
    """The unique IDs of the Members who are mentioned in the file description."""

    name: str
    """The optional User-specified name of the file."""

    thumbnail_url: str | None
    """The url where the thumbnail of the file can be found in Shortcut."""

    size: int
    """The size of the file."""

    uploader_id: UUID
    """The unique ID of the Member who uploaded the file."""

    content_type: str
    """Free form string corresponding to a text or image file."""

    updated_at: RFC3339DateTime | None
    """The time/date that the file was updated."""

    filename: str
    """The name assigned to the file in Shortcut upon upload."""

    group_mention_ids: list[UUID]
    """The unique IDs of the Groups who are mentioned in the file description."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID
    in the other tool can be indicated here."""

    id: int
    """The unique ID for the file."""

    url: str | None
    """The URL for the file."""

    created_at: RFC3339DateTime
    """The time/date that the file was created."""


class UploadedFileDict(TypedDict):
    description: str | None
    entity_type: str
    story_ids: list[int]
    mention_ids: list[UUID]
    member_mention_ids: list[UUID]
    name: str
    thumbnail_url: str | None
    size: int
    uploader_id: UUID
    content_type: str
    updated_at: RFC3339DateTime | None
    filename: str
    group_mention_ids: list[UUID]
    external_id: str | None
    id: int
    url: str | None
    created_at: RFC3339DateTime
