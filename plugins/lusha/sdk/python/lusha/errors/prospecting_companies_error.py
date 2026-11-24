from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ProspectingCompaniesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ProspectingCompaniesError:
    def map(self, status_code: int, content: bytes) -> ProspectingCompaniesErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


prospecting_companies_error_mapper: Final[ErrorMapper[ProspectingCompaniesErrorBody]] = _ProspectingCompaniesError()
