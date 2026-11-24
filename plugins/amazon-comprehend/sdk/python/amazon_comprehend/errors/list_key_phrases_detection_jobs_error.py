from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListKeyPhrasesDetectionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListKeyPhrasesDetectionJobsError:
    def map(self, status_code: int, content: bytes) -> ListKeyPhrasesDetectionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_key_phrases_detection_jobs_error_mapper: Final[
    ErrorMapper[ListKeyPhrasesDetectionJobsErrorBody]
] = _ListKeyPhrasesDetectionJobsError()
