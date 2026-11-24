from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListTopicsDetectionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListTopicsDetectionJobsError:
    def map(self, status_code: int, content: bytes) -> ListTopicsDetectionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_topics_detection_jobs_error_mapper: Final[
    ErrorMapper[ListTopicsDetectionJobsErrorBody]
] = _ListTopicsDetectionJobsError()
