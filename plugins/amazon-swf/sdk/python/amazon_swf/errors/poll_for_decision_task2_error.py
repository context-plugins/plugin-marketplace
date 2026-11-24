from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PollForDecisionTask2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PollForDecisionTask2Error:
    def map(self, status_code: int, content: bytes) -> PollForDecisionTask2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


poll_for_decision_task2_error_mapper: Final[ErrorMapper[PollForDecisionTask2ErrorBody]] = _PollForDecisionTask2Error()
