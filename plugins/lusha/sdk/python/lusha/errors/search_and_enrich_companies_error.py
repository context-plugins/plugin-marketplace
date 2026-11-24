from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SearchAndEnrichCompaniesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SearchAndEnrichCompaniesError:
    def map(self, status_code: int, content: bytes) -> SearchAndEnrichCompaniesErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


search_and_enrich_companies_error_mapper: Final[
    ErrorMapper[SearchAndEnrichCompaniesErrorBody]
] = _SearchAndEnrichCompaniesError()
