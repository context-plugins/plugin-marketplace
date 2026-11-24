from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .workspace_file_upload_item import WorkspaceFileUploadItem, WorkspaceFileUploadItemDict


class WorkspaceFileUploadRequest(SdkBaseModel):
    files: list[WorkspaceFileUploadItem]
    allow_overrides: bool = Field(default=True, alias="allowOverrides")
    """When false, return 409 before reserving storage if any uploaded filename would replace an existing workspace
    file."""


class WorkspaceFileUploadRequestDict(TypedDict):
    files: list[WorkspaceFileUploadItemDict]
    allow_overrides: NotRequired[bool]
