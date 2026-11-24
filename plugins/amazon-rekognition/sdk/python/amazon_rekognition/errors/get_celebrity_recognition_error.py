from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCelebrityRecognitionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCelebrityRecognitionError:
    def map(self, status_code: int, content: bytes) -> GetCelebrityRecognitionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_celebrity_recognition_error_mapper: Final[
    ErrorMapper[GetCelebrityRecognitionErrorBody]
] = _GetCelebrityRecognitionError()
