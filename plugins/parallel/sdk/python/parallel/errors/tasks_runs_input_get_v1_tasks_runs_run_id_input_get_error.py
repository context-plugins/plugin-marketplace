from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TasksRunsInputGetV1TasksRunsRunIdInputGetError:
    def map(self, status_code: int, content: bytes) -> TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error_mapper: Final[
    ErrorMapper[TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody]
] = _TasksRunsInputGetV1TasksRunsRunIdInputGetError()
