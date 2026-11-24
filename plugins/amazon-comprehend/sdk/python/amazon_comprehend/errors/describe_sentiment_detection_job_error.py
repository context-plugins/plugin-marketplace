from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeSentimentDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeSentimentDetectionJobError:
    def map(self, status_code: int, content: bytes) -> DescribeSentimentDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_sentiment_detection_job_error_mapper: Final[
    ErrorMapper[DescribeSentimentDetectionJobErrorBody]
] = _DescribeSentimentDetectionJobError()
