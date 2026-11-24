from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetOpenApiDocumentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetOpenApiDocumentError:
    def map(self, status_code: int, content: bytes) -> GetOpenApiDocumentErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_open_api_document_error_mapper: Final[ErrorMapper[GetOpenApiDocumentErrorBody]] = _GetOpenApiDocumentError()
