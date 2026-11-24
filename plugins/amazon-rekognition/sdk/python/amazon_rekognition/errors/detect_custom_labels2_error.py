from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectCustomLabels2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectCustomLabels2Error:
    def map(self, status_code: int, content: bytes) -> DetectCustomLabels2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_custom_labels2_error_mapper: Final[ErrorMapper[DetectCustomLabels2ErrorBody]] = _DetectCustomLabels2Error()
