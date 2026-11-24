from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1IntensityV1IntensityGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1IntensityV1IntensityGetError:
    def map(self, status_code: int, content: bytes) -> V1IntensityV1IntensityGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_intensity_v1_intensity_get_error_mapper: Final[
    ErrorMapper[V1IntensityV1IntensityGetErrorBody]
] = _V1IntensityV1IntensityGetError()
