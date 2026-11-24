from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetSourceGroupErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetSourceGroupError:
    def map(self, status_code: int, content: bytes) -> GetSourceGroupErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_source_group_error_mapper: Final[ErrorMapper[GetSourceGroupErrorBody]] = _GetSourceGroupError()
