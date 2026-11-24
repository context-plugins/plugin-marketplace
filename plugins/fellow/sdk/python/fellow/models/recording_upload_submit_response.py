from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecordingUploadSubmitResponse(SdkBaseModel):
    """Response for POST /recordings/upload — the 201 confirming a recording was queued for import."""

    recording_id: str


class RecordingUploadSubmitResponseDict(TypedDict):
    recording_id: str
