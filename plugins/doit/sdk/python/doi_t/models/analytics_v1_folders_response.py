from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .folder import Folder, FolderDict


class AnalyticsV1FoldersResponse(SdkBaseModel):
    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token, returned by a previous call, to request the next page of results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Number of folders returned in this page."""

    folders: Optional[list[Folder]] = UNSET


class AnalyticsV1FoldersResponseDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    folders: NotRequired[list[FolderDict]]
