from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UploadUrlResponse(SdkBaseModel):
    """A pre-signed URL for uploading build artifacts."""

    upload_url: Optional[str] = UNSET
    """The pre-signed URL to use for uploading the build artifact file."""

    upload_uid: Optional[str] = UNSET
    """Unique identifier for this upload, used when creating a deployment."""

    expires_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the pre-signed URL expires (10 minutes)."""


class UploadUrlResponseDict(TypedDict):
    upload_url: NotRequired[str]
    upload_uid: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
