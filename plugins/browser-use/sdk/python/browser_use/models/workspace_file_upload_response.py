from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workspace_file_upload_response_item import WorkspaceFileUploadResponseItem, WorkspaceFileUploadResponseItemDict


class WorkspaceFileUploadResponse(SdkBaseModel):
    files: list[WorkspaceFileUploadResponseItem]


class WorkspaceFileUploadResponseDict(TypedDict):
    files: list[WorkspaceFileUploadResponseItemDict]
