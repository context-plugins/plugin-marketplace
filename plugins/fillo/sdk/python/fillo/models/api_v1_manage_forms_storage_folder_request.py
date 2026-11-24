from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsStorageFolderRequest(SdkBaseModel):
    folder_id: str = Field(alias="folderId")
    """A Google Drive folder id."""


class ApiV1ManageFormsStorageFolderRequestDict(TypedDict):
    folder_id: str
