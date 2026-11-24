from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartCallAnalyticsJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartCallAnalyticsJobError:
    def map(self, status_code: int, content: bytes) -> StartCallAnalyticsJobErrorBody:
        match status_code:
            case 400 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_call_analytics_job_error_mapper: Final[
    ErrorMapper[StartCallAnalyticsJobErrorBody]
] = _StartCallAnalyticsJobError()
