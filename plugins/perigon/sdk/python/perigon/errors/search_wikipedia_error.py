from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SearchWikipediaErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SearchWikipediaError:
    def map(self, status_code: int, content: bytes) -> SearchWikipediaErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


search_wikipedia_error_mapper: Final[ErrorMapper[SearchWikipediaErrorBody]] = _SearchWikipediaError()
