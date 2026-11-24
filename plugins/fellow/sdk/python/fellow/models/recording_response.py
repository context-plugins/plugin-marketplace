from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .recording import Recording, RecordingDict


class RecordingResponse(SdkBaseModel):
    """Response containing a single recording."""

    recording: Recording


class RecordingResponseDict(TypedDict):
    recording: RecordingDict
