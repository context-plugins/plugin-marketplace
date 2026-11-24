from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListTargetedSentimentDetectionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListTargetedSentimentDetectionJobsError:
    def map(self, status_code: int, content: bytes) -> ListTargetedSentimentDetectionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_targeted_sentiment_detection_jobs_error_mapper: Final[
    ErrorMapper[ListTargetedSentimentDetectionJobsErrorBody]
] = _ListTargetedSentimentDetectionJobsError()
