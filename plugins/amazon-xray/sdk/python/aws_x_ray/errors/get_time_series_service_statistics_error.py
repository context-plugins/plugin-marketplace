from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.throttled_exception import ThrottledException

GetTimeSeriesServiceStatisticsErrorBody: TypeAlias = InvalidRequestException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _GetTimeSeriesServiceStatisticsError:
    def map(self, status_code: int, content: bytes) -> GetTimeSeriesServiceStatisticsErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


get_time_series_service_statistics_error_mapper: Final[
    ErrorMapper[GetTimeSeriesServiceStatisticsErrorBody]
] = _GetTimeSeriesServiceStatisticsError()
