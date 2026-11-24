from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RecordActivityTaskHeartbeat2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RecordActivityTaskHeartbeat2Error:
    def map(self, status_code: int, content: bytes) -> RecordActivityTaskHeartbeat2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


record_activity_task_heartbeat2_error_mapper: Final[
    ErrorMapper[RecordActivityTaskHeartbeat2ErrorBody]
] = _RecordActivityTaskHeartbeat2Error()
