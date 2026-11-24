from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopKeyPhrasesDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopKeyPhrasesDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StopKeyPhrasesDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_key_phrases_detection_job_error_mapper: Final[
    ErrorMapper[StopKeyPhrasesDetectionJobErrorBody]
] = _StopKeyPhrasesDetectionJobError()
