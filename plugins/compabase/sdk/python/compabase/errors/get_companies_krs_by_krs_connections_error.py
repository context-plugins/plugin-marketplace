from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompaniesKrsByKrsConnectionsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompaniesKrsByKrsConnectionsError:
    def map(self, status_code: int, content: bytes) -> GetCompaniesKrsByKrsConnectionsErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_companies_krs_by_krs_connections_error_mapper: Final[
    ErrorMapper[GetCompaniesKrsByKrsConnectionsErrorBody]
] = _GetCompaniesKrsByKrsConnectionsError()
