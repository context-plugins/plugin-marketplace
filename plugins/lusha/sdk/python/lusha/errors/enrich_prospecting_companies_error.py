from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

EnrichProspectingCompaniesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _EnrichProspectingCompaniesError:
    def map(self, status_code: int, content: bytes) -> EnrichProspectingCompaniesErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


enrich_prospecting_companies_error_mapper: Final[
    ErrorMapper[EnrichProspectingCompaniesErrorBody]
] = _EnrichProspectingCompaniesError()
