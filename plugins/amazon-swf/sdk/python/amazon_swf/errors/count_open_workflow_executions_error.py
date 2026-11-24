from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountOpenWorkflowExecutionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountOpenWorkflowExecutionsError:
    def map(self, status_code: int, content: bytes) -> CountOpenWorkflowExecutionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_open_workflow_executions_error_mapper: Final[
    ErrorMapper[CountOpenWorkflowExecutionsErrorBody]
] = _CountOpenWorkflowExecutionsError()
