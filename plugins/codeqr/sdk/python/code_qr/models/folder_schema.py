from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.access_level import AccessLevelOrStr
from .enums.type_codeqr_io_folders_api import TypeCodeqrIoFoldersApiOrStr


class FolderSchema(SdkBaseModel):
    id: str
    """The unique ID of the folder."""

    name: str
    """The name of the folder."""

    type_: TypeCodeqrIoFoldersApiOrStr = Field(alias="type")
    access_level: AccessLevelOrStr | None = Field(alias="accessLevel")
    """The access level of the folder within the workspace."""

    created_at: str = Field(alias="createdAt")
    """The date the folder was created."""

    updated_at: str = Field(alias="updatedAt")
    """The date the folder was updated."""


class FolderSchemaDict(TypedDict):
    id: str
    name: str
    type_: TypeCodeqrIoFoldersApiOrStr
    access_level: AccessLevelOrStr | None
    created_at: str
    updated_at: str
