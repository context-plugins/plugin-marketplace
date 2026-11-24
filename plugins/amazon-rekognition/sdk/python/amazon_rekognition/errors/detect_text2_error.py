from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectText2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectText2Error:
    def map(self, status_code: int, content: bytes) -> DetectText2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_text2_error_mapper: Final[ErrorMapper[DetectText2ErrorBody]] = _DetectText2Error()
