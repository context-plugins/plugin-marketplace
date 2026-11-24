from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RecognizeCelebrities2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RecognizeCelebrities2Error:
    def map(self, status_code: int, content: bytes) -> RecognizeCelebrities2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


recognize_celebrities2_error_mapper: Final[ErrorMapper[RecognizeCelebrities2ErrorBody]] = _RecognizeCelebrities2Error()
