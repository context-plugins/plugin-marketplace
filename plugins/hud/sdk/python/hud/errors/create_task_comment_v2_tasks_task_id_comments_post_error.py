from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateTaskCommentV2TasksTaskIdCommentsPostError:
    def map(self, status_code: int, content: bytes) -> CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_task_comment_v2_tasks_task_id_comments_post_error_mapper: Final[
    ErrorMapper[CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody]
] = _CreateTaskCommentV2TasksTaskIdCommentsPostError()
