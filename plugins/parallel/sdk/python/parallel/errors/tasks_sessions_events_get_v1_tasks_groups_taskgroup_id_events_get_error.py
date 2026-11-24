from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError:
    def map(self, status_code: int, content: bytes) -> TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody:
        match status_code:
            case 404:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error_mapper: Final[
    ErrorMapper[TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody]
] = _TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError()
