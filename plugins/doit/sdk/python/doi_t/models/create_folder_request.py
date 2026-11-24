from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateFolderRequest(SdkBaseModel):
    """Request body for creating a folder."""

    name: str
    """Folder name."""

    description: Optional[str] = UNSET
    """Folder description."""

    parent_folder_id: str = Field(default="root", alias="parentFolderId")
    """Identifier of the parent folder. Use "root" or omit to place the folder at the top level."""


class CreateFolderRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    parent_folder_id: NotRequired[str]
