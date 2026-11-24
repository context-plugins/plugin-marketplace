from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectDominantLanguageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectDominantLanguageError:
    def map(self, status_code: int, content: bytes) -> DetectDominantLanguageErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_dominant_language_error_mapper: Final[
    ErrorMapper[DetectDominantLanguageErrorBody]
] = _DetectDominantLanguageError()
