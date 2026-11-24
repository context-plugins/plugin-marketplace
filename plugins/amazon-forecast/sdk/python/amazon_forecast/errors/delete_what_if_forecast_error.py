from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteWhatIfForecastErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteWhatIfForecastError:
    def map(self, status_code: int, content: bytes) -> DeleteWhatIfForecastErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_what_if_forecast_error_mapper: Final[ErrorMapper[DeleteWhatIfForecastErrorBody]] = _DeleteWhatIfForecastError()
