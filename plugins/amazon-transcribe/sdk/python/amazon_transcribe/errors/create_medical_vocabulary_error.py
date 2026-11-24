from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateMedicalVocabularyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateMedicalVocabularyError:
    def map(self, status_code: int, content: bytes) -> CreateMedicalVocabularyErrorBody:
        match status_code:
            case 400 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_medical_vocabulary_error_mapper: Final[
    ErrorMapper[CreateMedicalVocabularyErrorBody]
] = _CreateMedicalVocabularyError()
