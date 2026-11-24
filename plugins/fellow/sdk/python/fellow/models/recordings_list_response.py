from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .paginated_response_recording import PaginatedResponseRecording, PaginatedResponseRecordingDict


class RecordingsListResponse(SdkBaseModel):
    """Response containing a paginated list of recordings."""

    recordings: PaginatedResponseRecording


class RecordingsListResponseDict(TypedDict):
    recordings: PaginatedResponseRecordingDict
