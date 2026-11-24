from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectLabels2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectLabels2Error:
    def map(self, status_code: int, content: bytes) -> DetectLabels2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_labels2_error_mapper: Final[ErrorMapper[DetectLabels2ErrorBody]] = _DetectLabels2Error()
