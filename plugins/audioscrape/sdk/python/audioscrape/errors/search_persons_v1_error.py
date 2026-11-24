from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

SearchPersonsV1ErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _SearchPersonsV1Error:
    def map(self, status_code: int, content: bytes) -> SearchPersonsV1ErrorBody:
        match status_code:
            case 401 | 402 | 403 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


search_persons_v1_error_mapper: Final[ErrorMapper[SearchPersonsV1ErrorBody]] = _SearchPersonsV1Error()
