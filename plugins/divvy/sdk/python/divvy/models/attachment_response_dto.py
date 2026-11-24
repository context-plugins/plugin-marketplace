from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class AttachmentResponseDto(SdkBaseModel):
    """Attachments response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the attachment. The value begins with ``att``."""

    name: Optional[str] = UNSET
    """Attachment name"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    download_link: Optional[str] = Field(default=UNSET, alias="downloadLink")
    """URL for downloading the attachment. Use the URL in a GET request to download the attachment."""


class AttachmentResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    download_link: NotRequired[str]
