from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.throttled_exception import ThrottledException

UpdateTraceSegmentDestinationErrorBody: TypeAlias = InvalidRequestException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _UpdateTraceSegmentDestinationError:
    def map(self, status_code: int, content: bytes) -> UpdateTraceSegmentDestinationErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


update_trace_segment_destination_error_mapper: Final[
    ErrorMapper[UpdateTraceSegmentDestinationErrorBody]
] = _UpdateTraceSegmentDestinationError()
