from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.sync_api_reference400_error1 import SyncApiReference400Error1

SyncOpenApiDocumentErrorBody: TypeAlias = SyncApiReference400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _SyncOpenApiDocumentError:
    def map(self, status_code: int, content: bytes) -> SyncOpenApiDocumentErrorBody:
        match status_code:
            case 400:
                return decode_json[SyncApiReference400Error1](content)
            case _:
                return RawError(status_code, content)


sync_open_api_document_error_mapper: Final[ErrorMapper[SyncOpenApiDocumentErrorBody]] = _SyncOpenApiDocumentError()
