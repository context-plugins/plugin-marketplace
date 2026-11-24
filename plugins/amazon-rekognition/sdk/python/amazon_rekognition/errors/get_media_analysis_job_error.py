from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetMediaAnalysisJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetMediaAnalysisJobError:
    def map(self, status_code: int, content: bytes) -> GetMediaAnalysisJobErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_media_analysis_job_error_mapper: Final[ErrorMapper[GetMediaAnalysisJobErrorBody]] = _GetMediaAnalysisJobError()
