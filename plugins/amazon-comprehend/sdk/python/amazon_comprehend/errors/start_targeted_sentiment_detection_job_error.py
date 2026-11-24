from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartTargetedSentimentDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartTargetedSentimentDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StartTargetedSentimentDetectionJobErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_targeted_sentiment_detection_job_error_mapper: Final[
    ErrorMapper[StartTargetedSentimentDetectionJobErrorBody]
] = _StartTargetedSentimentDetectionJobError()
