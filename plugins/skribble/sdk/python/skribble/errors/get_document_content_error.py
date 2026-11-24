from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

GetDocumentContentErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _GetDocumentContentError:
    def map(self, status_code: int, content: bytes) -> GetDocumentContentErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


get_document_content_error_mapper: Final[ErrorMapper[GetDocumentContentErrorBody]] = _GetDocumentContentError()
