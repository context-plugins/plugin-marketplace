from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FileManagerFileRequest(SdkBaseModel):
    file_id: str = Field(alias="fileId")
    """Id of the file or folder to delete."""


class FileManagerFileRequestDict(TypedDict):
    file_id: str
