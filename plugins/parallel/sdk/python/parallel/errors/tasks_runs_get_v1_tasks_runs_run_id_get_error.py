from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TasksRunsGetV1TasksRunsRunIdGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TasksRunsGetV1TasksRunsRunIdGetError:
    def map(self, status_code: int, content: bytes) -> TasksRunsGetV1TasksRunsRunIdGetErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


tasks_runs_get_v1_tasks_runs_run_id_get_error_mapper: Final[
    ErrorMapper[TasksRunsGetV1TasksRunsRunIdGetErrorBody]
] = _TasksRunsGetV1TasksRunsRunIdGetError()
