from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AggregateStatsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AggregateStatsError:
    def map(self, status_code: int, content: bytes) -> AggregateStatsErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


aggregate_stats_error_mapper: Final[ErrorMapper[AggregateStatsErrorBody]] = _AggregateStatsError()
