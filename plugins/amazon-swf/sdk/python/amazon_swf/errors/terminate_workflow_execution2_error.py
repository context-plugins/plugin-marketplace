from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TerminateWorkflowExecution2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TerminateWorkflowExecution2Error:
    def map(self, status_code: int, content: bytes) -> TerminateWorkflowExecution2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


terminate_workflow_execution2_error_mapper: Final[
    ErrorMapper[TerminateWorkflowExecution2ErrorBody]
] = _TerminateWorkflowExecution2Error()
