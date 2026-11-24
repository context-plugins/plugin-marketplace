from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountClosedWorkflowExecutionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountClosedWorkflowExecutionsError:
    def map(self, status_code: int, content: bytes) -> CountClosedWorkflowExecutionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_closed_workflow_executions_error_mapper: Final[
    ErrorMapper[CountClosedWorkflowExecutionsErrorBody]
] = _CountClosedWorkflowExecutionsError()
