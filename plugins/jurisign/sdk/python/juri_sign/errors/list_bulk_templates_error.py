from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

ListBulkTemplatesErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListBulkTemplatesError:
    def map(self, status_code: int, content: bytes) -> ListBulkTemplatesErrorBody:
        match status_code:
            case 401:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


list_bulk_templates_error_mapper: Final[ErrorMapper[ListBulkTemplatesErrorBody]] = _ListBulkTemplatesError()
