from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ExecuteAnalyticsQueryErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ExecuteAnalyticsQueryError:
    def map(self, status_code: int, content: bytes) -> ExecuteAnalyticsQueryErrorBody:
        match status_code:
            case 400 | 403 | 408 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


execute_analytics_query_error_mapper: Final[ErrorMapper[ExecuteAnalyticsQueryErrorBody]] = _ExecuteAnalyticsQueryError()
