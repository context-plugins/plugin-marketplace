from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

SatelliteSatelliteGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _SatelliteSatelliteGetError:
    def map(self, status_code: int, content: bytes) -> SatelliteSatelliteGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


satellite_satellite_get_error_mapper: Final[ErrorMapper[SatelliteSatelliteGetErrorBody]] = _SatelliteSatelliteGetError()
