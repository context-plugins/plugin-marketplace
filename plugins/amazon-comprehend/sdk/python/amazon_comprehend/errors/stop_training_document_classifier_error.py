from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopTrainingDocumentClassifierErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopTrainingDocumentClassifierError:
    def map(self, status_code: int, content: bytes) -> StopTrainingDocumentClassifierErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_training_document_classifier_error_mapper: Final[
    ErrorMapper[StopTrainingDocumentClassifierErrorBody]
] = _StopTrainingDocumentClassifierError()
