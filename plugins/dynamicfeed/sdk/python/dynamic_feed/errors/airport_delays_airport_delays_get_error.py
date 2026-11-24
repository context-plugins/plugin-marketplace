from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

AirportDelaysAirportDelaysGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _AirportDelaysAirportDelaysGetError:
    def map(self, status_code: int, content: bytes) -> AirportDelaysAirportDelaysGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


airport_delays_airport_delays_get_error_mapper: Final[
    ErrorMapper[AirportDelaysAirportDelaysGetErrorBody]
] = _AirportDelaysAirportDelaysGetError()
