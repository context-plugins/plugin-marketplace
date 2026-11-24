from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .recording_upload import RecordingUpload, RecordingUploadDict


class RecordingUploadResponse(SdkBaseModel):
    """Response containing a single API-uploaded recording with its import status."""

    upload: RecordingUpload
    """The upload_api response: a recording's API-import identity and status, nothing else.

    Deliberately omits the full Recording payload (transcript, recaps, media URL, calendar metadata) — this surface only
    reports what an API-upload client needs to poll an import to completion. The recording's id is exposed as
    ``recording_id`` to match the submit endpoint (POST /recordings/upload), which returns the same key."""


class RecordingUploadResponseDict(TypedDict):
    upload: RecordingUploadDict
