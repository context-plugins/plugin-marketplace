from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

GetDocumentPreviewErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _GetDocumentPreviewError:
    def map(self, status_code: int, content: bytes) -> GetDocumentPreviewErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


get_document_preview_error_mapper: Final[ErrorMapper[GetDocumentPreviewErrorBody]] = _GetDocumentPreviewError()
