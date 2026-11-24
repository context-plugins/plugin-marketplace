from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartDocumentClassificationJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartDocumentClassificationJobError:
    def map(self, status_code: int, content: bytes) -> StartDocumentClassificationJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_document_classification_job_error_mapper: Final[
    ErrorMapper[StartDocumentClassificationJobErrorBody]
] = _StartDocumentClassificationJobError()
