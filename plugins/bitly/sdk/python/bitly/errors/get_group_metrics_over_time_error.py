from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupMetricsOverTimeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupMetricsOverTimeError:
    def map(self, status_code: int, content: bytes) -> GetGroupMetricsOverTimeErrorBody:
        match status_code:
            case 400 | 403 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_metrics_over_time_error_mapper: Final[
    ErrorMapper[GetGroupMetricsOverTimeErrorBody]
] = _GetGroupMetricsOverTimeError()
