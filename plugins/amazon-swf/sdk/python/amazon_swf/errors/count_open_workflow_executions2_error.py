from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountOpenWorkflowExecutions2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountOpenWorkflowExecutions2Error:
    def map(self, status_code: int, content: bytes) -> CountOpenWorkflowExecutions2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


count_open_workflow_executions2_error_mapper: Final[
    ErrorMapper[CountOpenWorkflowExecutions2ErrorBody]
] = _CountOpenWorkflowExecutions2Error()
