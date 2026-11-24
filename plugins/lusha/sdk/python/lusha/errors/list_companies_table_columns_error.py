from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListCompaniesTableColumnsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListCompaniesTableColumnsError:
    def map(self, status_code: int, content: bytes) -> ListCompaniesTableColumnsErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_companies_table_columns_error_mapper: Final[
    ErrorMapper[ListCompaniesTableColumnsErrorBody]
] = _ListCompaniesTableColumnsError()
