from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchAllSettlementsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchAllSettlementsError:
    def map(self, status_code: int, content: bytes) -> FetchAllSettlementsErrorBody:
        match status_code:
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_all_settlements_error_mapper: Final[ErrorMapper[FetchAllSettlementsErrorBody]] = _FetchAllSettlementsError()
