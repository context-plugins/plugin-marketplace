from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeWhatIfForecastErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeWhatIfForecastError:
    def map(self, status_code: int, content: bytes) -> DescribeWhatIfForecastErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_what_if_forecast_error_mapper: Final[
    ErrorMapper[DescribeWhatIfForecastErrorBody]
] = _DescribeWhatIfForecastError()
