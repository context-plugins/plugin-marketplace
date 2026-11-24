from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetSegmentDetectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetSegmentDetectionError:
    def map(self, status_code: int, content: bytes) -> GetSegmentDetectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_segment_detection_error_mapper: Final[ErrorMapper[GetSegmentDetectionErrorBody]] = _GetSegmentDetectionError()
