from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompaniesKrsByKrsSecuredLiabilitiesError:
    def map(self, status_code: int, content: bytes) -> GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_companies_krs_by_krs_secured_liabilities_error_mapper: Final[
    ErrorMapper[GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody]
] = _GetCompaniesKrsByKrsSecuredLiabilitiesError()
