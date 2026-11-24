from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompaniesKrsByKrsEuFundsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompaniesKrsByKrsEuFundsError:
    def map(self, status_code: int, content: bytes) -> GetCompaniesKrsByKrsEuFundsErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_companies_krs_by_krs_eu_funds_error_mapper: Final[
    ErrorMapper[GetCompaniesKrsByKrsEuFundsErrorBody]
] = _GetCompaniesKrsByKrsEuFundsError()
