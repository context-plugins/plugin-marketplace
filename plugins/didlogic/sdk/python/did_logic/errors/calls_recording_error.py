from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.unions.api_v1_calls_recording_response1 import ApiV1CallsRecordingResponse1

CallsRecordingErrorBody: TypeAlias = ApiV1CallsRecordingResponse1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _CallsRecordingError:
    def map(self, status_code: int, content: bytes) -> CallsRecordingErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1CallsRecordingResponse1](content)
            case 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


calls_recording_error_mapper: Final[ErrorMapper[CallsRecordingErrorBody]] = _CallsRecordingError()
