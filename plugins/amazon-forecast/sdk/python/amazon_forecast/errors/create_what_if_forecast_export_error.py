from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateWhatIfForecastExportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateWhatIfForecastExportError:
    def map(self, status_code: int, content: bytes) -> CreateWhatIfForecastExportErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_what_if_forecast_export_error_mapper: Final[
    ErrorMapper[CreateWhatIfForecastExportErrorBody]
] = _CreateWhatIfForecastExportError()
