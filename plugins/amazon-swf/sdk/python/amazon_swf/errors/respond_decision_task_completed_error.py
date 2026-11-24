from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RespondDecisionTaskCompletedErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RespondDecisionTaskCompletedError:
    def map(self, status_code: int, content: bytes) -> RespondDecisionTaskCompletedErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


respond_decision_task_completed_error_mapper: Final[
    ErrorMapper[RespondDecisionTaskCompletedErrorBody]
] = _RespondDecisionTaskCompletedError()
