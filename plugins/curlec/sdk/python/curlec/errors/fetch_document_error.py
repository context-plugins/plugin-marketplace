from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchDocumentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchDocumentError:
    def map(self, status_code: int, content: bytes) -> FetchDocumentErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_document_error_mapper: Final[ErrorMapper[FetchDocumentErrorBody]] = _FetchDocumentError()
