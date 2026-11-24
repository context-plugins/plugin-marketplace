from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountPendingDecisionTasks2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountPendingDecisionTasks2Error:
    def map(self, status_code: int, content: bytes) -> CountPendingDecisionTasks2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_pending_decision_tasks2_error_mapper: Final[
    ErrorMapper[CountPendingDecisionTasks2ErrorBody]
] = _CountPendingDecisionTasks2Error()
