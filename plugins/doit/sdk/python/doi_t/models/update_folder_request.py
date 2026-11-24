from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateFolderRequest(SdkBaseModel):
    """Request body for updating a folder. All fields are optional; only fields the caller wants to change should be
    set."""

    name: Optional[str] = UNSET
    """Folder name."""

    description: Optional[str] = UNSET
    """Folder description."""

    parent_folder_id: str = Field(default="root", alias="parentFolderId")
    """Identifier of the new parent folder. Use "root" to move the folder to the top level. If a sibling at the new
    parent has the same name, the folder is auto-renamed (e.g. "Foo" → "Foo (1)")."""


class UpdateFolderRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    parent_folder_id: NotRequired[str]
