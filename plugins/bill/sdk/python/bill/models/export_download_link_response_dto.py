from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExportDownloadLinkResponseDto(SdkBaseModel):
    """Response DTO for export download link."""

    download_link: Optional[str] = Field(default=UNSET, alias="downloadLink")
    """Download URL for the exported record file"""


class ExportDownloadLinkResponseDtoDict(TypedDict):
    download_link: NotRequired[str]
