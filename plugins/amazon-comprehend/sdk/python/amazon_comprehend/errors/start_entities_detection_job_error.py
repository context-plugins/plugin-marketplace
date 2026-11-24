from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartEntitiesDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartEntitiesDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StartEntitiesDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_entities_detection_job_error_mapper: Final[
    ErrorMapper[StartEntitiesDetectionJobErrorBody]
] = _StartEntitiesDetectionJobError()
