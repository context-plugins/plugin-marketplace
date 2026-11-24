from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupTopMetricsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupTopMetricsError:
    def map(self, status_code: int, content: bytes) -> GetGroupTopMetricsErrorBody:
        match status_code:
            case 400 | 403 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_top_metrics_error_mapper: Final[ErrorMapper[GetGroupTopMetricsErrorBody]] = _GetGroupTopMetricsError()
