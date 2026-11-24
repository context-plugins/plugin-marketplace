from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

WeatherAlertsWeatherAlertsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _WeatherAlertsWeatherAlertsGetError:
    def map(self, status_code: int, content: bytes) -> WeatherAlertsWeatherAlertsGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


weather_alerts_weather_alerts_get_error_mapper: Final[
    ErrorMapper[WeatherAlertsWeatherAlertsGetErrorBody]
] = _WeatherAlertsWeatherAlertsGetError()
