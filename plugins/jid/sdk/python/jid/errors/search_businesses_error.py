from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SearchBusinessesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SearchBusinessesError:
    def map(self, status_code: int, content: bytes) -> SearchBusinessesErrorBody:
        match status_code:
            case 400 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


search_businesses_error_mapper: Final[ErrorMapper[SearchBusinessesErrorBody]] = _SearchBusinessesError()
