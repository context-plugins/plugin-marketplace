from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RespondDecisionTaskCompleted2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RespondDecisionTaskCompleted2Error:
    def map(self, status_code: int, content: bytes) -> RespondDecisionTaskCompleted2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


respond_decision_task_completed2_error_mapper: Final[
    ErrorMapper[RespondDecisionTaskCompleted2ErrorBody]
] = _RespondDecisionTaskCompleted2Error()
