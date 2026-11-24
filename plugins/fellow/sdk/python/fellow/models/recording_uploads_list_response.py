from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .paginated_response_recording_upload import PaginatedResponseRecordingUpload, PaginatedResponseRecordingUploadDict


class RecordingUploadsListResponse(SdkBaseModel):
    """Response containing a paginated list of API-uploaded recordings with import status."""

    uploads: PaginatedResponseRecordingUpload


class RecordingUploadsListResponseDict(TypedDict):
    uploads: PaginatedResponseRecordingUploadDict
