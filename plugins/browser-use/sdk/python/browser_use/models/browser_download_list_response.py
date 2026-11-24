from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .browser_download_file import BrowserDownloadFile, BrowserDownloadFileDict


class BrowserDownloadListResponse(SdkBaseModel):
    """Paginated list of browser downloads with optional presigned URLs."""

    files: list[BrowserDownloadFile]
    """List of files downloaded by the browser"""

    next_cursor: Optional[str] = Field(default=UNSET, alias="nextCursor")
    """Cursor for the next page. Pass as the ``cursor`` query parameter to fetch the next page."""

    has_more: bool = Field(default=False, alias="hasMore")
    """Whether there are more files beyond this page."""


class BrowserDownloadListResponseDict(TypedDict):
    files: list[BrowserDownloadFileDict]
    next_cursor: NotRequired[str]
    has_more: NotRequired[bool]
