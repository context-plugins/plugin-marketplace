from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

TasksTaskgroupsPostV1TasksGroupsPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _TasksTaskgroupsPostV1TasksGroupsPostError:
    def map(self, status_code: int, content: bytes) -> TasksTaskgroupsPostV1TasksGroupsPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


tasks_taskgroups_post_v1_tasks_groups_post_error_mapper: Final[
    ErrorMapper[TasksTaskgroupsPostV1TasksGroupsPostErrorBody]
] = _TasksTaskgroupsPostV1TasksGroupsPostError()
