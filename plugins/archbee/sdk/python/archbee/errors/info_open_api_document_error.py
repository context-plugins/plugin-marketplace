from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.info_api_reference400_error1 import InfoApiReference400Error1

InfoOpenApiDocumentErrorBody: TypeAlias = InfoApiReference400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _InfoOpenApiDocumentError:
    def map(self, status_code: int, content: bytes) -> InfoOpenApiDocumentErrorBody:
        match status_code:
            case 400:
                return decode_json[InfoApiReference400Error1](content)
            case _:
                return RawError(status_code, content)


info_open_api_document_error_mapper: Final[ErrorMapper[InfoOpenApiDocumentErrorBody]] = _InfoOpenApiDocumentError()
