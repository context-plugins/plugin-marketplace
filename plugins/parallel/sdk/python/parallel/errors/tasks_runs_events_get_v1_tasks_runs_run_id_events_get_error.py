from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TasksRunsEventsGetV1TasksRunsRunIdEventsGetError:
    def map(self, status_code: int, content: bytes) -> TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error_mapper: Final[
    ErrorMapper[TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody]
] = _TasksRunsEventsGetV1TasksRunsRunIdEventsGetError()
