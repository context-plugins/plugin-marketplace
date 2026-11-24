from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEntitiesDetectionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEntitiesDetectionJobsError:
    def map(self, status_code: int, content: bytes) -> ListEntitiesDetectionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_entities_detection_jobs_error_mapper: Final[
    ErrorMapper[ListEntitiesDetectionJobsErrorBody]
] = _ListEntitiesDetectionJobsError()
