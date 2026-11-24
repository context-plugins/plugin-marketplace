from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartTopicsDetectionJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartTopicsDetectionJobError:
    def map(self, status_code: int, content: bytes) -> StartTopicsDetectionJobErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_topics_detection_job_error_mapper: Final[
    ErrorMapper[StartTopicsDetectionJobErrorBody]
] = _StartTopicsDetectionJobError()
