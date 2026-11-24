from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TerminateWorkflowExecutionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TerminateWorkflowExecutionError:
    def map(self, status_code: int, content: bytes) -> TerminateWorkflowExecutionErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


terminate_workflow_execution_error_mapper: Final[
    ErrorMapper[TerminateWorkflowExecutionErrorBody]
] = _TerminateWorkflowExecutionError()
