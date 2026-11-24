from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class WorkspaceFileInfo(SdkBaseModel):
    """A file the agent has produced for the workspace. Shape mirrors V3 files (FileInfo) so a single UI component can
    render both."""

    path: str
    """File path relative to the workspace root"""

    size: int
    """File size in bytes"""

    last_modified: RFC3339DateTime = Field(alias="lastModified")
    """When the file was last modified"""

    url: Optional[str] = UNSET
    """Presigned download URL (60s expiry). Only included when ``includeUrls=true``."""


class WorkspaceFileInfoDict(TypedDict):
    path: str
    size: int
    last_modified: RFC3339DateTime
    url: NotRequired[str]
