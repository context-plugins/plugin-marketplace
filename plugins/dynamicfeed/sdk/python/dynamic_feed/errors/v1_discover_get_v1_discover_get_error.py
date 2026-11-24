from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1DiscoverGetV1DiscoverGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1DiscoverGetV1DiscoverGetError:
    def map(self, status_code: int, content: bytes) -> V1DiscoverGetV1DiscoverGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_discover_get_v1_discover_get_error_mapper: Final[
    ErrorMapper[V1DiscoverGetV1DiscoverGetErrorBody]
] = _V1DiscoverGetV1DiscoverGetError()
