from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListTicketTagsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListTicketTagsError:
    def map(self, status_code: int, content: bytes) -> ListTicketTagsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_ticket_tags_error_mapper: Final[ErrorMapper[ListTicketTagsErrorBody]] = _ListTicketTagsError()
