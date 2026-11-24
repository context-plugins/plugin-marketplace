from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListTicketsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListTicketsError:
    def map(self, status_code: int, content: bytes) -> ListTicketsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 502 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_tickets_error_mapper: Final[ErrorMapper[ListTicketsErrorBody]] = _ListTicketsError()
