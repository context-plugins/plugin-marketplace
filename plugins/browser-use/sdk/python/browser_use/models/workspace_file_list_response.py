from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workspace_file_info import WorkspaceFileInfo, WorkspaceFileInfoDict


class WorkspaceFileListResponse(SdkBaseModel):
    files: list[WorkspaceFileInfo]
    next_cursor: Optional[str] = Field(default=UNSET, alias="nextCursor")
    has_more: bool = Field(default=False, alias="hasMore")


class WorkspaceFileListResponseDict(TypedDict):
    files: list[WorkspaceFileInfoDict]
    next_cursor: NotRequired[str]
    has_more: NotRequired[bool]
