from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1AnalyticsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1AnalyticsError:
    def map(self, status_code: int, content: bytes) -> GetApiV1AnalyticsErrorBody:
        match status_code:
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_analytics_error_mapper: Final[ErrorMapper[GetApiV1AnalyticsErrorBody]] = _GetApiV1AnalyticsError()
