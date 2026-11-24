from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDocumentClassificationJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDocumentClassificationJobsError:
    def map(self, status_code: int, content: bytes) -> ListDocumentClassificationJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_document_classification_jobs_error_mapper: Final[
    ErrorMapper[ListDocumentClassificationJobsErrorBody]
] = _ListDocumentClassificationJobsError()
