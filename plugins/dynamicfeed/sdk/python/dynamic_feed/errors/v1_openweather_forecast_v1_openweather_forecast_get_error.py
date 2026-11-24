from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1OpenweatherForecastV1OpenweatherForecastGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1OpenweatherForecastV1OpenweatherForecastGetError:
    def map(self, status_code: int, content: bytes) -> V1OpenweatherForecastV1OpenweatherForecastGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_openweather_forecast_v1_openweather_forecast_get_error_mapper: Final[
    ErrorMapper[V1OpenweatherForecastV1OpenweatherForecastGetErrorBody]
] = _V1OpenweatherForecastV1OpenweatherForecastGetError()
