from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateVocabularyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateVocabularyError:
    def map(self, status_code: int, content: bytes) -> UpdateVocabularyErrorBody:
        match status_code:
            case 400 | 404 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_vocabulary_error_mapper: Final[ErrorMapper[UpdateVocabularyErrorBody]] = _UpdateVocabularyError()
