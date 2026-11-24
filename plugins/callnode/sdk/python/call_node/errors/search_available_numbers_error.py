from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SearchAvailableNumbersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SearchAvailableNumbersError:
    def map(self, status_code: int, content: bytes) -> SearchAvailableNumbersErrorBody:
        match status_code:
            case 400 | 401 | 502:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


search_available_numbers_error_mapper: Final[
    ErrorMapper[SearchAvailableNumbersErrorBody]
] = _SearchAvailableNumbersError()
