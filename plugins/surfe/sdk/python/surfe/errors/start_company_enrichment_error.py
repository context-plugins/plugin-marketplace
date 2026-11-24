from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

StartCompanyEnrichmentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _StartCompanyEnrichmentError:
    def map(self, status_code: int, content: bytes) -> StartCompanyEnrichmentErrorBody:
        match status_code:
            case 401 | 402 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


start_company_enrichment_error_mapper: Final[
    ErrorMapper[StartCompanyEnrichmentErrorBody]
] = _StartCompanyEnrichmentError()
