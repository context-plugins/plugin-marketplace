from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListLocationsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListLocationsError:
    def map(self, status_code: int, content: bytes) -> ListLocationsErrorBody:
        match status_code:
            case 401 | 403 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_locations_error_mapper: Final[ErrorMapper[ListLocationsErrorBody]] = _ListLocationsError()
