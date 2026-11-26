from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReimbursementImageUploadUrlResponseDto(SdkBaseModel):
    """API response for creating a reimbursement image upload URL."""

    url: Optional[str] = UNSET
    """Pre-signed URL for uploading a receipt"""


class ReimbursementImageUploadUrlResponseDtoDict(TypedDict):
    url: NotRequired[str]
