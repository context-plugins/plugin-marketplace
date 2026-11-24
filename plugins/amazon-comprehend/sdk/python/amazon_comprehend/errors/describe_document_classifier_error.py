from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeDocumentClassifierErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeDocumentClassifierError:
    def map(self, status_code: int, content: bytes) -> DescribeDocumentClassifierErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_document_classifier_error_mapper: Final[
    ErrorMapper[DescribeDocumentClassifierErrorBody]
] = _DescribeDocumentClassifierError()
