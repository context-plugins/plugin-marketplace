from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetPersonsSearchErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetPersonsSearchError:
    def map(self, status_code: int, content: bytes) -> GetPersonsSearchErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_persons_search_error_mapper: Final[ErrorMapper[GetPersonsSearchErrorBody]] = _GetPersonsSearchError()
