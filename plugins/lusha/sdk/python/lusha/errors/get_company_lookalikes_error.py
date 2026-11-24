from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCompanyLookalikesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCompanyLookalikesError:
    def map(self, status_code: int, content: bytes) -> GetCompanyLookalikesErrorBody:
        match status_code:
            case 400 | 403 | 410 | 500:
                return decode_json[ErrorResponse](content)
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_company_lookalikes_error_mapper: Final[ErrorMapper[GetCompanyLookalikesErrorBody]] = _GetCompanyLookalikesError()
