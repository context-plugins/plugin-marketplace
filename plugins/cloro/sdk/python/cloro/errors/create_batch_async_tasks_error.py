from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error import AuthenticationError
from ..models.internal_error import InternalError
from ..models.queue_limit_error import QueueLimitError
from ..models.validation_error import ValidationError

CreateBatchAsyncTasksErrorBody: TypeAlias = (
    ValidationError | AuthenticationError | QueueLimitError | InternalError | RawError
)


@dataclass(frozen=True, slots=True)
class _CreateBatchAsyncTasksError:
    def map(self, status_code: int, content: bytes) -> CreateBatchAsyncTasksErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationError](content)
            case 401:
                return decode_json[AuthenticationError](content)
            case 429:
                return decode_json[QueueLimitError](content)
            case 500:
                return decode_json[InternalError](content)
            case _:
                return RawError(status_code, content)


create_batch_async_tasks_error_mapper: Final[
    ErrorMapper[CreateBatchAsyncTasksErrorBody]
] = _CreateBatchAsyncTasksError()
