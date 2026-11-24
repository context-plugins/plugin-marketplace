from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListSentimentDetectionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListSentimentDetectionJobsError:
    def map(self, status_code: int, content: bytes) -> ListSentimentDetectionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_sentiment_detection_jobs_error_mapper: Final[
    ErrorMapper[ListSentimentDetectionJobsErrorBody]
] = _ListSentimentDetectionJobsError()
