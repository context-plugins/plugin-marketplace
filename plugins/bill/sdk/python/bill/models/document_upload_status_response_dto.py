from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scan_status import ScanStatusOrStr
from .enums.upload_status import UploadStatusOrStr


class DocumentUploadStatusResponseDto(SdkBaseModel):
    """Get document upload status response."""

    document_id: Optional[str] = Field(default=UNSET, alias="documentId")
    """BILL-generated ID of the document. The value begins with ``00h``."""

    upload_id: Optional[str] = Field(default=UNSET, alias="uploadId")
    """BILL-generated ID of the document upload. The value begins with ``0du``."""

    status: Optional[UploadStatusOrStr] = UNSET
    scan_status: Optional[ScanStatusOrStr] = Field(default=UNSET, alias="scanStatus")


class DocumentUploadStatusResponseDtoDict(TypedDict):
    document_id: NotRequired[str]
    upload_id: NotRequired[str]
    status: NotRequired[UploadStatusOrStr]
    scan_status: NotRequired[ScanStatusOrStr]
