from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError:
    def map(
        self, status_code: int, content: bytes
    ) -> TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error_mapper: Final[
    ErrorMapper[TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody]
] = _TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError()
