from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PollForDecisionTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PollForDecisionTaskError:
    def map(self, status_code: int, content: bytes) -> PollForDecisionTaskErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


poll_for_decision_task_error_mapper: Final[ErrorMapper[PollForDecisionTaskErrorBody]] = _PollForDecisionTaskError()
