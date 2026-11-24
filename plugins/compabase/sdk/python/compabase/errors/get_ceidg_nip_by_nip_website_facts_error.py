from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCeidgNipByNipWebsiteFactsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCeidgNipByNipWebsiteFactsError:
    def map(self, status_code: int, content: bytes) -> GetCeidgNipByNipWebsiteFactsErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_ceidg_nip_by_nip_website_facts_error_mapper: Final[
    ErrorMapper[GetCeidgNipByNipWebsiteFactsErrorBody]
] = _GetCeidgNipByNipWebsiteFactsError()
