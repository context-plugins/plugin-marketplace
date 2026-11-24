from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateVocabularyFilterErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateVocabularyFilterError:
    def map(self, status_code: int, content: bytes) -> UpdateVocabularyFilterErrorBody:
        match status_code:
            case 400 | 404 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_vocabulary_filter_error_mapper: Final[
    ErrorMapper[UpdateVocabularyFilterErrorBody]
] = _UpdateVocabularyFilterError()
