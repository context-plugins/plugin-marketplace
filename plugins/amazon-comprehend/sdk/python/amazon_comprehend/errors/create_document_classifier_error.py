from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateDocumentClassifierErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateDocumentClassifierError:
    def map(self, status_code: int, content: bytes) -> CreateDocumentClassifierErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_document_classifier_error_mapper: Final[
    ErrorMapper[CreateDocumentClassifierErrorBody]
] = _CreateDocumentClassifierError()
