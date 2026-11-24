from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.docs_search400_error1 import DocsSearch400Error1

SearchDocumentErrorBody: TypeAlias = DocsSearch400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _SearchDocumentError:
    def map(self, status_code: int, content: bytes) -> SearchDocumentErrorBody:
        match status_code:
            case 400:
                return decode_json[DocsSearch400Error1](content)
            case _:
                return RawError(status_code, content)


search_document_error_mapper: Final[ErrorMapper[SearchDocumentErrorBody]] = _SearchDocumentError()
