from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error_mapper: Final[
    ErrorMapper[DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody]
] = _DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError()
