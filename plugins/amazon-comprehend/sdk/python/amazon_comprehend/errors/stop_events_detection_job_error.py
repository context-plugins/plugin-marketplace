from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopEventsDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopEventsDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StopEventsDetectionJobErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_events_detection_job_error_mapper: Final[
    ErrorMapper[StopEventsDetectionJobErrorBody]
] = _StopEventsDetectionJobError()
