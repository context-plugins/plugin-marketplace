from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteVocabularyFilterErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteVocabularyFilterError:
    def map(self, status_code: int, content: bytes) -> DeleteVocabularyFilterErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_vocabulary_filter_error_mapper: Final[
    ErrorMapper[DeleteVocabularyFilterErrorBody]
] = _DeleteVocabularyFilterError()
