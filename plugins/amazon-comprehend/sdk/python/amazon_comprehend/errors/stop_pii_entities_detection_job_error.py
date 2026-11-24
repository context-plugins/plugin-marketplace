from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopPiiEntitiesDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopPiiEntitiesDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StopPiiEntitiesDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_pii_entities_detection_job_error_mapper: Final[
    ErrorMapper[StopPiiEntitiesDetectionJobErrorBody]
] = _StopPiiEntitiesDetectionJobError()
