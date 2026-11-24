from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RecognizeCelebritiesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RecognizeCelebritiesError:
    def map(self, status_code: int, content: bytes) -> RecognizeCelebritiesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


recognize_celebrities_error_mapper: Final[ErrorMapper[RecognizeCelebritiesErrorBody]] = _RecognizeCelebritiesError()
