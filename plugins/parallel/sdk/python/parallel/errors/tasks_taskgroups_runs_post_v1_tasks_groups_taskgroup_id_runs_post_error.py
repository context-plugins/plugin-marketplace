from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError:
    def map(self, status_code: int, content: bytes) -> TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error_mapper: Final[
    ErrorMapper[TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody]
] = _TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError()
