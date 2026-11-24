from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ExtractV1ExtractPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ExtractV1ExtractPostError:
    def map(self, status_code: int, content: bytes) -> ExtractV1ExtractPostErrorBody:
        match status_code:
            case 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


extract_v1_extract_post_error_mapper: Final[ErrorMapper[ExtractV1ExtractPostErrorBody]] = _ExtractV1ExtractPostError()
