from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountPendingActivityTasks2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountPendingActivityTasks2Error:
    def map(self, status_code: int, content: bytes) -> CountPendingActivityTasks2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_pending_activity_tasks2_error_mapper: Final[
    ErrorMapper[CountPendingActivityTasks2ErrorBody]
] = _CountPendingActivityTasks2Error()
