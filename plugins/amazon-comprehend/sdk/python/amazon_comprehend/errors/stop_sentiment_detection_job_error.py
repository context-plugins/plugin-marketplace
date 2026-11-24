from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopSentimentDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopSentimentDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StopSentimentDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_sentiment_detection_job_error_mapper: Final[
    ErrorMapper[StopSentimentDetectionJobErrorBody]
] = _StopSentimentDetectionJobError()
