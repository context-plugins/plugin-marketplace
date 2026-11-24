from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeForecastExportJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeForecastExportJobError:
    def map(self, status_code: int, content: bytes) -> DescribeForecastExportJobErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_forecast_export_job_error_mapper: Final[
    ErrorMapper[DescribeForecastExportJobErrorBody]
] = _DescribeForecastExportJobError()
