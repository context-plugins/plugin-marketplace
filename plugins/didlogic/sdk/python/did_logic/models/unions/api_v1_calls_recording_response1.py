from __future__ import annotations

from typing import TypeAlias

from ..api_v1_calls_recording_response import ApiV1CallsRecordingResponse, ApiV1CallsRecordingResponseDict
from ..error import Error, ErrorDict

ApiV1CallsRecordingResponse1: TypeAlias = Error | ApiV1CallsRecordingResponse

ApiV1CallsRecordingResponse1Dict: TypeAlias = ErrorDict | ApiV1CallsRecordingResponseDict
