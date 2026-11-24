from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountPendingActivityTasksErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountPendingActivityTasksError:
    def map(self, status_code: int, content: bytes) -> CountPendingActivityTasksErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_pending_activity_tasks_error_mapper: Final[
    ErrorMapper[CountPendingActivityTasksErrorBody]
] = _CountPendingActivityTasksError()
