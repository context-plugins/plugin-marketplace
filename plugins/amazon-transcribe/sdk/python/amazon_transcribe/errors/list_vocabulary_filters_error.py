from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListVocabularyFiltersErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListVocabularyFiltersError:
    def map(self, status_code: int, content: bytes) -> ListVocabularyFiltersErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_vocabulary_filters_error_mapper: Final[ErrorMapper[ListVocabularyFiltersErrorBody]] = _ListVocabularyFiltersError()
