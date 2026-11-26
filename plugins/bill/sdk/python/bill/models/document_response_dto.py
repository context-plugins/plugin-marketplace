from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.scan_status import ScanStatusOrStr


class DocumentResponseDto(SdkBaseModel):
    """Documents response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the document.
    * A temporary BILL-generated ID is available for the document when the upload is in progress. The value begins with
        ``0du``.
    * A BILL-generated ID is available for the document when the upload is complete. The value begins with ``00h``."""

    name: Optional[str] = UNSET
    """Document name"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    download_link: Optional[str] = Field(default=UNSET, alias="downloadLink")
    """URL for downloading the document. Use the URL in a GET request to download the document."""

    num_of_pages: Optional[int] = Field(default=UNSET, alias="numOfPages")
    """Number of pages in the document"""

    scan_status: Optional[ScanStatusOrStr] = Field(default=UNSET, alias="scanStatus")


class DocumentResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    download_link: NotRequired[str]
    num_of_pages: NotRequired[int]
    scan_status: NotRequired[ScanStatusOrStr]
