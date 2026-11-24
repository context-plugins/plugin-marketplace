from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1CallsRecordingResponse(SdkBaseModel):
    error: str


class ApiV1CallsRecordingResponseDict(TypedDict):
    error: str
