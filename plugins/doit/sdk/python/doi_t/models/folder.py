from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Folder(SdkBaseModel):
    """A Cloud Analytics folder."""

    id: Optional[str] = UNSET
    """Folder ID."""

    name: Optional[str] = UNSET
    """Folder name."""

    description: Optional[str] = UNSET
    """Folder description."""

    parent_folder_id: str = Field(default="root", alias="parentFolderId")
    """Identifier of the parent folder. Set to "root" if the folder is at the top level."""


class FolderDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    parent_folder_id: NotRequired[str]
