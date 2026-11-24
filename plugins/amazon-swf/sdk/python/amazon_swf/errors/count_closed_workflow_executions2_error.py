from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountClosedWorkflowExecutions2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountClosedWorkflowExecutions2Error:
    def map(self, status_code: int, content: bytes) -> CountClosedWorkflowExecutions2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_closed_workflow_executions2_error_mapper: Final[
    ErrorMapper[CountClosedWorkflowExecutions2ErrorBody]
] = _CountClosedWorkflowExecutions2Error()
