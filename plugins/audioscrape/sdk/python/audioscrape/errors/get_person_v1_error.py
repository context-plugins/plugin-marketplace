from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

GetPersonV1ErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _GetPersonV1Error:
    def map(self, status_code: int, content: bytes) -> GetPersonV1ErrorBody:
        match status_code:
            case 401 | 402 | 403 | 404 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


get_person_v1_error_mapper: Final[ErrorMapper[GetPersonV1ErrorBody]] = _GetPersonV1Error()
