from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SignalWorkflowExecution2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SignalWorkflowExecution2Error:
    def map(self, status_code: int, content: bytes) -> SignalWorkflowExecution2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


signal_workflow_execution2_error_mapper: Final[
    ErrorMapper[SignalWorkflowExecution2ErrorBody]
] = _SignalWorkflowExecution2Error()
