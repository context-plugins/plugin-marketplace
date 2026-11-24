from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

WaterLevelsWaterLevelsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _WaterLevelsWaterLevelsGetError:
    def map(self, status_code: int, content: bytes) -> WaterLevelsWaterLevelsGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


water_levels_water_levels_get_error_mapper: Final[
    ErrorMapper[WaterLevelsWaterLevelsGetErrorBody]
] = _WaterLevelsWaterLevelsGetError()
