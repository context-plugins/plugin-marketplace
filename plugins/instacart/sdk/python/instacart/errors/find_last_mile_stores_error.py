from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FindLastMileStoresErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FindLastMileStoresError:
    def map(self, status_code: int, content: bytes) -> FindLastMileStoresErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


find_last_mile_stores_error_mapper: Final[ErrorMapper[FindLastMileStoresErrorBody]] = _FindLastMileStoresError()
