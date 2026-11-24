from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeEntitiesDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeEntitiesDetectionJobError:
    def map(self, status_code: int, content: bytes) -> DescribeEntitiesDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_entities_detection_job_error_mapper: Final[
    ErrorMapper[DescribeEntitiesDetectionJobErrorBody]
] = _DescribeEntitiesDetectionJobError()
