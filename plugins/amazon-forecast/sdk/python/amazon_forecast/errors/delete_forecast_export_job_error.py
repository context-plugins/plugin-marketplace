from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteForecastExportJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteForecastExportJobError:
    def map(self, status_code: int, content: bytes) -> DeleteForecastExportJobErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_forecast_export_job_error_mapper: Final[
    ErrorMapper[DeleteForecastExportJobErrorBody]
] = _DeleteForecastExportJobError()
