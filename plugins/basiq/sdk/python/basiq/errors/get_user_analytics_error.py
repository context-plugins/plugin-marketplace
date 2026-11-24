from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_list import ErrorList

GetUserAnalyticsErrorBody: TypeAlias = ErrorList | RawError


@dataclass(frozen=True, slots=True)
class _GetUserAnalyticsError:
    def map(self, status_code: int, content: bytes) -> GetUserAnalyticsErrorBody:
        match status_code:
            case 400 | 403:
                return decode_json[ErrorList](content)
            case 401 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_user_analytics_error_mapper: Final[ErrorMapper[GetUserAnalyticsErrorBody]] = _GetUserAnalyticsError()
