from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

RemoveContactsTableColumnErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _RemoveContactsTableColumnError:
    def map(self, status_code: int, content: bytes) -> RemoveContactsTableColumnErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


remove_contacts_table_column_error_mapper: Final[
    ErrorMapper[RemoveContactsTableColumnErrorBody]
] = _RemoveContactsTableColumnError()
