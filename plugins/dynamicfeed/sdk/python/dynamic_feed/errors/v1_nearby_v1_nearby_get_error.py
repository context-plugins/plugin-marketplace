from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1NearbyV1NearbyGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1NearbyV1NearbyGetError:
    def map(self, status_code: int, content: bytes) -> V1NearbyV1NearbyGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_nearby_v1_nearby_get_error_mapper: Final[ErrorMapper[V1NearbyV1NearbyGetErrorBody]] = _V1NearbyV1NearbyGetError()
