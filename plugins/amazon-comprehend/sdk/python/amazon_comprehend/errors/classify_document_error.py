from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ClassifyDocumentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ClassifyDocumentError:
    def map(self, status_code: int, content: bytes) -> ClassifyDocumentErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


classify_document_error_mapper: Final[ErrorMapper[ClassifyDocumentErrorBody]] = _ClassifyDocumentError()
