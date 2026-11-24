from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

SearchApiV1ErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _SearchApiV1Error:
    def map(self, status_code: int, content: bytes) -> SearchApiV1ErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


search_api_v1_error_mapper: Final[ErrorMapper[SearchApiV1ErrorBody]] = _SearchApiV1Error()
