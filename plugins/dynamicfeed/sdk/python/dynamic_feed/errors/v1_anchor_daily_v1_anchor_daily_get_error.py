from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1AnchorDailyV1AnchorDailyGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1AnchorDailyV1AnchorDailyGetError:
    def map(self, status_code: int, content: bytes) -> V1AnchorDailyV1AnchorDailyGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_anchor_daily_v1_anchor_daily_get_error_mapper: Final[
    ErrorMapper[V1AnchorDailyV1AnchorDailyGetErrorBody]
] = _V1AnchorDailyV1AnchorDailyGetError()
