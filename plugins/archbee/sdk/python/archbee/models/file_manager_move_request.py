from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FileManagerMoveRequest(SdkBaseModel):
    file_id: str = Field(alias="fileId")
    """Id of the file or folder to move."""

    new_parent_id: str = Field(alias="newParentId")
    """Destination folder id, or null for the root."""


class FileManagerMoveRequestDict(TypedDict):
    file_id: str
    new_parent_id: str
