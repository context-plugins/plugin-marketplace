from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

ListDocumentsErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListDocumentsError:
    def map(self, status_code: int, content: bytes) -> ListDocumentsErrorBody:
        match status_code:
            case 401:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


list_documents_error_mapper: Final[ErrorMapper[ListDocumentsErrorBody]] = _ListDocumentsError()
