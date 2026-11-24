from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

SatellitesSatellitesGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _SatellitesSatellitesGetError:
    def map(self, status_code: int, content: bytes) -> SatellitesSatellitesGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


satellites_satellites_get_error_mapper: Final[
    ErrorMapper[SatellitesSatellitesGetErrorBody]
] = _SatellitesSatellitesGetError()
