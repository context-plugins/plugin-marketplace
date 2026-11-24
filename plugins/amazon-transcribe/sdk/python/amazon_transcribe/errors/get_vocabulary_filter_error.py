from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetVocabularyFilterErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetVocabularyFilterError:
    def map(self, status_code: int, content: bytes) -> GetVocabularyFilterErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_vocabulary_filter_error_mapper: Final[ErrorMapper[GetVocabularyFilterErrorBody]] = _GetVocabularyFilterError()
