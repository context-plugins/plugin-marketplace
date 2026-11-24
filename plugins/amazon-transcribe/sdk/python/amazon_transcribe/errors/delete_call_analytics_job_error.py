from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteCallAnalyticsJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteCallAnalyticsJobError:
    def map(self, status_code: int, content: bytes) -> DeleteCallAnalyticsJobErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_call_analytics_job_error_mapper: Final[
    ErrorMapper[DeleteCallAnalyticsJobErrorBody]
] = _DeleteCallAnalyticsJobError()
