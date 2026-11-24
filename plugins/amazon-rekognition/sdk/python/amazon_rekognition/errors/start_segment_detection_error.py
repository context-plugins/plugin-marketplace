from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartSegmentDetectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartSegmentDetectionError:
    def map(self, status_code: int, content: bytes) -> StartSegmentDetectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_segment_detection_error_mapper: Final[ErrorMapper[StartSegmentDetectionErrorBody]] = _StartSegmentDetectionError()
