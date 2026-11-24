from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListForecastExportJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListForecastExportJobsError:
    def map(self, status_code: int, content: bytes) -> ListForecastExportJobsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_forecast_export_jobs_error_mapper: Final[
    ErrorMapper[ListForecastExportJobsErrorBody]
] = _ListForecastExportJobsError()
