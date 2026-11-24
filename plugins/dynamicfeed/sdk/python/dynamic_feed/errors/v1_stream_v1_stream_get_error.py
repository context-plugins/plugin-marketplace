from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1StreamV1StreamGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1StreamV1StreamGetError:
    def map(self, status_code: int, content: bytes) -> V1StreamV1StreamGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_stream_v1_stream_get_error_mapper: Final[ErrorMapper[V1StreamV1StreamGetErrorBody]] = _V1StreamV1StreamGetError()
