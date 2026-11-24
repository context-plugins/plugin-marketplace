from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMedicalVocabulariesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMedicalVocabulariesError:
    def map(self, status_code: int, content: bytes) -> ListMedicalVocabulariesErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_medical_vocabularies_error_mapper: Final[
    ErrorMapper[ListMedicalVocabulariesErrorBody]
] = _ListMedicalVocabulariesError()
