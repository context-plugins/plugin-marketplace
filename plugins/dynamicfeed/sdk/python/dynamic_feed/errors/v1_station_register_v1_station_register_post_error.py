from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1StationRegisterV1StationRegisterPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1StationRegisterV1StationRegisterPostError:
    def map(self, status_code: int, content: bytes) -> V1StationRegisterV1StationRegisterPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_station_register_v1_station_register_post_error_mapper: Final[
    ErrorMapper[V1StationRegisterV1StationRegisterPostErrorBody]
] = _V1StationRegisterV1StationRegisterPostError()
