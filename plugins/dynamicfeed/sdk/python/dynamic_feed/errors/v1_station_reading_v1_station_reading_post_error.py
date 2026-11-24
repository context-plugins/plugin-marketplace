from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1StationReadingV1StationReadingPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1StationReadingV1StationReadingPostError:
    def map(self, status_code: int, content: bytes) -> V1StationReadingV1StationReadingPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_station_reading_v1_station_reading_post_error_mapper: Final[
    ErrorMapper[V1StationReadingV1StationReadingPostErrorBody]
] = _V1StationReadingV1StationReadingPostError()
