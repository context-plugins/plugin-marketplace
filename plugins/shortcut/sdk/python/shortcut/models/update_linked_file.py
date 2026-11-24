from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_shortcut_linked_files_api import TypeShortcutLinkedFilesApiOrStr


class UpdateLinkedFile(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of the file."""

    story_id: Optional[int] = UNSET
    """The ID of the linked story."""

    name: Optional[str] = UNSET
    """The name of the file."""

    thumbnail_url: Optional[str] = UNSET
    """The URL of the thumbnail, if the integration provided it."""

    type_: Optional[TypeShortcutLinkedFilesApiOrStr] = Field(default=UNSET, alias="type")
    """The integration type of the file (e.g. google, dropbox, box)."""

    size: Optional[int] = UNSET
    """The filesize, if the integration provided it."""

    uploader_id: Optional[UUID] = UNSET
    """The UUID of the member that uploaded the file."""

    url: Optional[str] = UNSET
    """The URL of linked file."""


class UpdateLinkedFileDict(TypedDict):
    description: NotRequired[str]
    story_id: NotRequired[int]
    name: NotRequired[str]
    thumbnail_url: NotRequired[str]
    type_: NotRequired[TypeShortcutLinkedFilesApiOrStr]
    size: NotRequired[int]
    uploader_id: NotRequired[UUID]
    url: NotRequired[str]
