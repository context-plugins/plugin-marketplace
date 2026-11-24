from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDocumentClassifierSummariesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDocumentClassifierSummariesError:
    def map(self, status_code: int, content: bytes) -> ListDocumentClassifierSummariesErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_document_classifier_summaries_error_mapper: Final[
    ErrorMapper[ListDocumentClassifierSummariesErrorBody]
] = _ListDocumentClassifierSummariesError()
