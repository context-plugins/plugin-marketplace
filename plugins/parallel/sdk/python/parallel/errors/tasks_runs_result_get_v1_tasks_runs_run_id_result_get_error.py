from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TasksRunsResultGetV1TasksRunsRunIdResultGetError:
    def map(self, status_code: int, content: bytes) -> TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody:
        match status_code:
            case 401 | 404 | 408 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error_mapper: Final[
    ErrorMapper[TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody]
] = _TasksRunsResultGetV1TasksRunsRunIdResultGetError()
