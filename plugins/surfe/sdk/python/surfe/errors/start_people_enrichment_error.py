from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

StartPeopleEnrichmentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _StartPeopleEnrichmentError:
    def map(self, status_code: int, content: bytes) -> StartPeopleEnrichmentErrorBody:
        match status_code:
            case 401 | 402 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


start_people_enrichment_error_mapper: Final[ErrorMapper[StartPeopleEnrichmentErrorBody]] = _StartPeopleEnrichmentError()
