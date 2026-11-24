from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SearchPeopleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SearchPeopleError:
    def map(self, status_code: int, content: bytes) -> SearchPeopleErrorBody:
        match status_code:
            case 401 | 402 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


search_people_error_mapper: Final[ErrorMapper[SearchPeopleErrorBody]] = _SearchPeopleError()
