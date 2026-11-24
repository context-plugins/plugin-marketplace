from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateWhatIfForecastErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateWhatIfForecastError:
    def map(self, status_code: int, content: bytes) -> CreateWhatIfForecastErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_what_if_forecast_error_mapper: Final[ErrorMapper[CreateWhatIfForecastErrorBody]] = _CreateWhatIfForecastError()
