from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteWhatIfForecastExportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteWhatIfForecastExportError:
    def map(self, status_code: int, content: bytes) -> DeleteWhatIfForecastExportErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_what_if_forecast_export_error_mapper: Final[
    ErrorMapper[DeleteWhatIfForecastExportErrorBody]
] = _DeleteWhatIfForecastExportError()
