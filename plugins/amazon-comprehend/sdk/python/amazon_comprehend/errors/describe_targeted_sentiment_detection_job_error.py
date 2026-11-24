from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeTargetedSentimentDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeTargetedSentimentDetectionJobError:
    def map(self, status_code: int, content: bytes) -> DescribeTargetedSentimentDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_targeted_sentiment_detection_job_error_mapper: Final[
    ErrorMapper[DescribeTargetedSentimentDetectionJobErrorBody]
] = _DescribeTargetedSentimentDetectionJobError()
