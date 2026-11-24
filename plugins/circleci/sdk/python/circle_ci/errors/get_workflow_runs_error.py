from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetWorkflowRunsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkflowRunsError:
    def map(self, status_code: int, content: bytes) -> GetWorkflowRunsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_workflow_runs_error_mapper: Final[ErrorMapper[GetWorkflowRunsErrorBody]] = _GetWorkflowRunsError()
