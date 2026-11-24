from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError:
    def map(self, status_code: int, content: bytes) -> TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error_mapper: Final[
    ErrorMapper[TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody]
] = _TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError()
