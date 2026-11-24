from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

GetMeUsageErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _GetMeUsageError:
    def map(self, status_code: int, content: bytes) -> GetMeUsageErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


get_me_usage_error_mapper: Final[ErrorMapper[GetMeUsageErrorBody]] = _GetMeUsageError()
