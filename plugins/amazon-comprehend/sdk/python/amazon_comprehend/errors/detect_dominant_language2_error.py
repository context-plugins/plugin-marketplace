from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectDominantLanguage2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectDominantLanguage2Error:
    def map(self, status_code: int, content: bytes) -> DetectDominantLanguage2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_dominant_language2_error_mapper: Final[
    ErrorMapper[DetectDominantLanguage2ErrorBody]
] = _DetectDominantLanguage2Error()
