from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateCompaniesTableErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateCompaniesTableError:
    def map(self, status_code: int, content: bytes) -> UpdateCompaniesTableErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_companies_table_error_mapper: Final[ErrorMapper[UpdateCompaniesTableErrorBody]] = _UpdateCompaniesTableError()
