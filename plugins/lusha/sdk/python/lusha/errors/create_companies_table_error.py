from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateCompaniesTableErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateCompaniesTableError:
    def map(self, status_code: int, content: bytes) -> CreateCompaniesTableErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_companies_table_error_mapper: Final[ErrorMapper[CreateCompaniesTableErrorBody]] = _CreateCompaniesTableError()
