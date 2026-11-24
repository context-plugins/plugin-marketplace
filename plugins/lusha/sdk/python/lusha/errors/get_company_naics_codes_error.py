from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompanyNaicsCodesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompanyNaicsCodesError:
    def map(self, status_code: int, content: bytes) -> GetCompanyNaicsCodesErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_company_naics_codes_error_mapper: Final[ErrorMapper[GetCompanyNaicsCodesErrorBody]] = _GetCompanyNaicsCodesError()
