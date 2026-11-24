from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_calls_statistics403_error1 import ApiV1CallsStatistics403Error1

CallsStatisticsErrorBody: TypeAlias = ApiV1CallsStatistics403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _CallsStatisticsError:
    def map(self, status_code: int, content: bytes) -> CallsStatisticsErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1CallsStatistics403Error1](content)
            case _:
                return RawError(status_code, content)


calls_statistics_error_mapper: Final[ErrorMapper[CallsStatisticsErrorBody]] = _CallsStatisticsError()
