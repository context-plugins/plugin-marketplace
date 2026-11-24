from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError:
    def map(self, status_code: int, content: bytes) -> TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody:
        match status_code:
            case 404:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error_mapper: Final[
    ErrorMapper[TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody]
] = _TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError()
