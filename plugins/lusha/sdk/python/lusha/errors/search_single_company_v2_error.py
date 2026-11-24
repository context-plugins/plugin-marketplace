from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SearchSingleCompanyV2ErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SearchSingleCompanyV2Error:
    def map(self, status_code: int, content: bytes) -> SearchSingleCompanyV2ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


search_single_company_v2_error_mapper: Final[
    ErrorMapper[SearchSingleCompanyV2ErrorBody]
] = _SearchSingleCompanyV2Error()
