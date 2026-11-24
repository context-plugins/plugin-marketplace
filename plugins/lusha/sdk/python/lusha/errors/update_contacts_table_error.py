from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateContactsTableErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateContactsTableError:
    def map(self, status_code: int, content: bytes) -> UpdateContactsTableErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_contacts_table_error_mapper: Final[ErrorMapper[UpdateContactsTableErrorBody]] = _UpdateContactsTableError()
