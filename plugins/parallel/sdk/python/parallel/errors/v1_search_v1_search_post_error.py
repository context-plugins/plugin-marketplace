from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

V1SearchV1SearchPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _V1SearchV1SearchPostError:
    def map(self, status_code: int, content: bytes) -> V1SearchV1SearchPostErrorBody:
        match status_code:
            case 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


v1_search_v1_search_post_error_mapper: Final[ErrorMapper[V1SearchV1SearchPostErrorBody]] = _V1SearchV1SearchPostError()
