from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchDetectDominantLanguageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchDetectDominantLanguageError:
    def map(self, status_code: int, content: bytes) -> BatchDetectDominantLanguageErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_detect_dominant_language_error_mapper: Final[
    ErrorMapper[BatchDetectDominantLanguageErrorBody]
] = _BatchDetectDominantLanguageError()
