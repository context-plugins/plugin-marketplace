from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopDominantLanguageDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopDominantLanguageDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StopDominantLanguageDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_dominant_language_detection_job_error_mapper: Final[
    ErrorMapper[StopDominantLanguageDetectionJobErrorBody]
] = _StopDominantLanguageDetectionJobError()
