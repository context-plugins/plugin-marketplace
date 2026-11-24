from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeWhatIfForecastExportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeWhatIfForecastExportError:
    def map(self, status_code: int, content: bytes) -> DescribeWhatIfForecastExportErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_what_if_forecast_export_error_mapper: Final[
    ErrorMapper[DescribeWhatIfForecastExportErrorBody]
] = _DescribeWhatIfForecastExportError()
