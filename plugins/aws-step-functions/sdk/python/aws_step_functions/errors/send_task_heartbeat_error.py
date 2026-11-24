from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SendTaskHeartbeatErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SendTaskHeartbeatError:
    def map(self, status_code: int, content: bytes) -> SendTaskHeartbeatErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


send_task_heartbeat_error_mapper: Final[ErrorMapper[SendTaskHeartbeatErrorBody]] = _SendTaskHeartbeatError()
