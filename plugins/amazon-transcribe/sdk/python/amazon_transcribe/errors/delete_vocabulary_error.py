from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteVocabularyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteVocabularyError:
    def map(self, status_code: int, content: bytes) -> DeleteVocabularyErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_vocabulary_error_mapper: Final[ErrorMapper[DeleteVocabularyErrorBody]] = _DeleteVocabularyError()
