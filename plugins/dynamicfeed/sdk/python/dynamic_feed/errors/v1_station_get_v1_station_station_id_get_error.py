from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1StationGetV1StationStationIdGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1StationGetV1StationStationIdGetError:
    def map(self, status_code: int, content: bytes) -> V1StationGetV1StationStationIdGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_station_get_v1_station_station_id_get_error_mapper: Final[
    ErrorMapper[V1StationGetV1StationStationIdGetErrorBody]
] = _V1StationGetV1StationStationIdGetError()
