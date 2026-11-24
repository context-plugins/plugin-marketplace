from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompanySignalFiltersErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompanySignalFiltersError:
    def map(self, status_code: int, content: bytes) -> GetCompanySignalFiltersErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_company_signal_filters_error_mapper: Final[
    ErrorMapper[GetCompanySignalFiltersErrorBody]
] = _GetCompanySignalFiltersError()
