from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class WorkspaceFileUploadItem(SdkBaseModel):
    name: str
    """Filename, e.g. "data.csv"
    """

    content_type: str = Field(default="application/octet-stream", alias="contentType")
    """MIME type, e.g. "text/csv"
    """

    size: int
    """Exact file size in bytes; the presigned URL is pinned to it."""


class WorkspaceFileUploadItemDict(TypedDict):
    name: str
    content_type: NotRequired[str]
    size: int
