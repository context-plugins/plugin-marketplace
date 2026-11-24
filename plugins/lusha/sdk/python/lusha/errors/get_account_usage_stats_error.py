from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetAccountUsageStatsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetAccountUsageStatsError:
    def map(self, status_code: int, content: bytes) -> GetAccountUsageStatsErrorBody:
        match status_code:
            case 401 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_account_usage_stats_error_mapper: Final[ErrorMapper[GetAccountUsageStatsErrorBody]] = _GetAccountUsageStatsError()
