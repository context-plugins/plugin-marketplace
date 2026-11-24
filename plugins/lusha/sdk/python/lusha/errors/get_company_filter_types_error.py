from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompanyFilterTypesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompanyFilterTypesError:
    def map(self, status_code: int, content: bytes) -> GetCompanyFilterTypesErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_company_filter_types_error_mapper: Final[
    ErrorMapper[GetCompanyFilterTypesErrorBody]
] = _GetCompanyFilterTypesError()
