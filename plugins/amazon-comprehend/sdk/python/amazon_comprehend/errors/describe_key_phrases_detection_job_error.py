from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeKeyPhrasesDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeKeyPhrasesDetectionJobError:
    def map(self, status_code: int, content: bytes) -> DescribeKeyPhrasesDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_key_phrases_detection_job_error_mapper: Final[
    ErrorMapper[DescribeKeyPhrasesDetectionJobErrorBody]
] = _DescribeKeyPhrasesDetectionJobError()
