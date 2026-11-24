from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCallAnalyticsJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCallAnalyticsJobsError:
    def map(self, status_code: int, content: bytes) -> ListCallAnalyticsJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_call_analytics_jobs_error_mapper: Final[
    ErrorMapper[ListCallAnalyticsJobsErrorBody]
] = _ListCallAnalyticsJobsError()
