from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RequestCancelWorkflowExecutionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RequestCancelWorkflowExecutionError:
    def map(self, status_code: int, content: bytes) -> RequestCancelWorkflowExecutionErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


request_cancel_workflow_execution_error_mapper: Final[
    ErrorMapper[RequestCancelWorkflowExecutionErrorBody]
] = _RequestCancelWorkflowExecutionError()
