from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateVocabularyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateVocabularyError:
    def map(self, status_code: int, content: bytes) -> CreateVocabularyErrorBody:
        match status_code:
            case 400 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_vocabulary_error_mapper: Final[ErrorMapper[CreateVocabularyErrorBody]] = _CreateVocabularyError()
