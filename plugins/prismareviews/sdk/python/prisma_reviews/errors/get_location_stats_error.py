from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetLocationStatsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetLocationStatsError:
    def map(self, status_code: int, content: bytes) -> GetLocationStatsErrorBody:
        match status_code:
            case 401 | 403 | 404 | 422 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_location_stats_error_mapper: Final[ErrorMapper[GetLocationStatsErrorBody]] = _GetLocationStatsError()
