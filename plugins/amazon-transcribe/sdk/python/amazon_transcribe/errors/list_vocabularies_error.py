from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListVocabulariesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListVocabulariesError:
    def map(self, status_code: int, content: bytes) -> ListVocabulariesErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_vocabularies_error_mapper: Final[ErrorMapper[ListVocabulariesErrorBody]] = _ListVocabulariesError()
