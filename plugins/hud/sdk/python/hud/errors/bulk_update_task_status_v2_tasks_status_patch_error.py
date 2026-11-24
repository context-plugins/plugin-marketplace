from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

BulkUpdateTaskStatusV2TasksStatusPatchErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _BulkUpdateTaskStatusV2TasksStatusPatchError:
    def map(self, status_code: int, content: bytes) -> BulkUpdateTaskStatusV2TasksStatusPatchErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


bulk_update_task_status_v2_tasks_status_patch_error_mapper: Final[
    ErrorMapper[BulkUpdateTaskStatusV2TasksStatusPatchErrorBody]
] = _BulkUpdateTaskStatusV2TasksStatusPatchError()
