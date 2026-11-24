from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartMediaAnalysisJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartMediaAnalysisJobError:
    def map(self, status_code: int, content: bytes) -> StartMediaAnalysisJobErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_media_analysis_job_error_mapper: Final[
    ErrorMapper[StartMediaAnalysisJobErrorBody]
] = _StartMediaAnalysisJobError()
