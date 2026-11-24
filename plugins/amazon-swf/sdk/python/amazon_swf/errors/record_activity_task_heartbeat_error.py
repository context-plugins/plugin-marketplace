from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RecordActivityTaskHeartbeatErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RecordActivityTaskHeartbeatError:
    def map(self, status_code: int, content: bytes) -> RecordActivityTaskHeartbeatErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


record_activity_task_heartbeat_error_mapper: Final[
    ErrorMapper[RecordActivityTaskHeartbeatErrorBody]
] = _RecordActivityTaskHeartbeatError()
