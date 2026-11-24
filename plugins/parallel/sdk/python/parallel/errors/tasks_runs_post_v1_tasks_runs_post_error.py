from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TasksRunsPostV1TasksRunsPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TasksRunsPostV1TasksRunsPostError:
    def map(self, status_code: int, content: bytes) -> TasksRunsPostV1TasksRunsPostErrorBody:
        match status_code:
            case 401 | 402 | 403 | 422 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


tasks_runs_post_v1_tasks_runs_post_error_mapper: Final[
    ErrorMapper[TasksRunsPostV1TasksRunsPostErrorBody]
] = _TasksRunsPostV1TasksRunsPostError()
