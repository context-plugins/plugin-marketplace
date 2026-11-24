from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMediaAnalysisJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMediaAnalysisJobsError:
    def map(self, status_code: int, content: bytes) -> ListMediaAnalysisJobsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_media_analysis_jobs_error_mapper: Final[
    ErrorMapper[ListMediaAnalysisJobsErrorBody]
] = _ListMediaAnalysisJobsError()
