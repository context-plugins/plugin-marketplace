from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListOpenWorkflowExecutionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListOpenWorkflowExecutionsError:
    def map(self, status_code: int, content: bytes) -> ListOpenWorkflowExecutionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_open_workflow_executions_error_mapper: Final[
    ErrorMapper[ListOpenWorkflowExecutionsErrorBody]
] = _ListOpenWorkflowExecutionsError()
