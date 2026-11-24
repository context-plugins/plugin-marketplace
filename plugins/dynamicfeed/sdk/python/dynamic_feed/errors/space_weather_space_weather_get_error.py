from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

SpaceWeatherSpaceWeatherGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _SpaceWeatherSpaceWeatherGetError:
    def map(self, status_code: int, content: bytes) -> SpaceWeatherSpaceWeatherGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


space_weather_space_weather_get_error_mapper: Final[
    ErrorMapper[SpaceWeatherSpaceWeatherGetErrorBody]
] = _SpaceWeatherSpaceWeatherGetError()
