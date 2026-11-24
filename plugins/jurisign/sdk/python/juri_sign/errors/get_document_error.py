from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

GetDocumentErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetDocumentError:
    def map(self, status_code: int, content: bytes) -> GetDocumentErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


get_document_error_mapper: Final[ErrorMapper[GetDocumentErrorBody]] = _GetDocumentError()
