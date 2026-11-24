from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountPendingDecisionTasksErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountPendingDecisionTasksError:
    def map(self, status_code: int, content: bytes) -> CountPendingDecisionTasksErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_pending_decision_tasks_error_mapper: Final[
    ErrorMapper[CountPendingDecisionTasksErrorBody]
] = _CountPendingDecisionTasksError()
