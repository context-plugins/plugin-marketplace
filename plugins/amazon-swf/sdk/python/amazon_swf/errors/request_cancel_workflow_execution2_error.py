from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RequestCancelWorkflowExecution2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RequestCancelWorkflowExecution2Error:
    def map(self, status_code: int, content: bytes) -> RequestCancelWorkflowExecution2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


request_cancel_workflow_execution2_error_mapper: Final[
    ErrorMapper[RequestCancelWorkflowExecution2ErrorBody]
] = _RequestCancelWorkflowExecution2Error()
