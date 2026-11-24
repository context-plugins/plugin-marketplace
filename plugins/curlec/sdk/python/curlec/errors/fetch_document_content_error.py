from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchDocumentContentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchDocumentContentError:
    def map(self, status_code: int, content: bytes) -> FetchDocumentContentErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_document_content_error_mapper: Final[ErrorMapper[FetchDocumentContentErrorBody]] = _FetchDocumentContentError()
