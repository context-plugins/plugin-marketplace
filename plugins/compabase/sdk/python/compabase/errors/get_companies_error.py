from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompaniesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompaniesError:
    def map(self, status_code: int, content: bytes) -> GetCompaniesErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_companies_error_mapper: Final[ErrorMapper[GetCompaniesErrorBody]] = _GetCompaniesError()
