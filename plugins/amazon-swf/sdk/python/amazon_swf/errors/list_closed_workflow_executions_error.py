from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListClosedWorkflowExecutionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListClosedWorkflowExecutionsError:
    def map(self, status_code: int, content: bytes) -> ListClosedWorkflowExecutionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_closed_workflow_executions_error_mapper: Final[
    ErrorMapper[ListClosedWorkflowExecutionsErrorBody]
] = _ListClosedWorkflowExecutionsError()
