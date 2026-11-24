from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentCreateResponseDto(SdkBaseModel):
    """Document response."""

    upload_id: Optional[str] = Field(default=UNSET, alias="uploadId")
    """BILL-generated ID of the upload. This is a temporary BILL-generated ID for the document when the upload is in
    progress. The value begins with ``0du``.

    When the upload is complete, a new BILL-generated ID is available for the document. The value begins with ``00h``.
    You can get the document upload status with ``GET /v3/documents/upload-status``."""


class DocumentCreateResponseDtoDict(TypedDict):
    upload_id: NotRequired[str]
