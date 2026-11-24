from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListContactsTablesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListContactsTablesError:
    def map(self, status_code: int, content: bytes) -> ListContactsTablesErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_contacts_tables_error_mapper: Final[ErrorMapper[ListContactsTablesErrorBody]] = _ListContactsTablesError()
