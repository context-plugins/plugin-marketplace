from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartCelebrityRecognitionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartCelebrityRecognitionError:
    def map(self, status_code: int, content: bytes) -> StartCelebrityRecognitionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_celebrity_recognition_error_mapper: Final[
    ErrorMapper[StartCelebrityRecognitionErrorBody]
] = _StartCelebrityRecognitionError()
