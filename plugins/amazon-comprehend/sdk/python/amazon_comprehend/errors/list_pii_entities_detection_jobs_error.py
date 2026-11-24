from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListPiiEntitiesDetectionJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListPiiEntitiesDetectionJobsError:
    def map(self, status_code: int, content: bytes) -> ListPiiEntitiesDetectionJobsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_pii_entities_detection_jobs_error_mapper: Final[
    ErrorMapper[ListPiiEntitiesDetectionJobsErrorBody]
] = _ListPiiEntitiesDetectionJobsError()
