from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.throttled_exception import ThrottledException

GetTraceSegmentDestinationErrorBody: TypeAlias = InvalidRequestException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _GetTraceSegmentDestinationError:
    def map(self, status_code: int, content: bytes) -> GetTraceSegmentDestinationErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


get_trace_segment_destination_error_mapper: Final[
    ErrorMapper[GetTraceSegmentDestinationErrorBody]
] = _GetTraceSegmentDestinationError()
