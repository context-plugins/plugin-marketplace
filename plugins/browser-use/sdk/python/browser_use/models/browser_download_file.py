from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class BrowserDownloadFile(SdkBaseModel):
    """A single file the browser downloaded during the session."""

    path: str
    """File name (basename relative to the session downloads prefix)"""

    size: int
    """File size in bytes"""

    last_modified: RFC3339DateTime = Field(alias="lastModified")
    """When the file was last modified in S3"""

    url: Optional[str] = UNSET
    """Presigned download URL (15 min expiry). Only included when ``includeUrls=true``."""


class BrowserDownloadFileDict(TypedDict):
    path: str
    size: int
    last_modified: RFC3339DateTime
    url: NotRequired[str]
