from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetWorkflowExecutionHistoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetWorkflowExecutionHistoryError:
    def map(self, status_code: int, content: bytes) -> GetWorkflowExecutionHistoryErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_workflow_execution_history_error_mapper: Final[
    ErrorMapper[GetWorkflowExecutionHistoryErrorBody]
] = _GetWorkflowExecutionHistoryError()
