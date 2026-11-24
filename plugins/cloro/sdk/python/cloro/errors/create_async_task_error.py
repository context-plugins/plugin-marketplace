from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error import AuthenticationError
from ..models.forbidden_error import ForbiddenError
from ..models.idempotency_conflict_error import IdempotencyConflictError
from ..models.internal_error import InternalError
from ..models.queue_limit_error import QueueLimitError
from ..models.validation_error import ValidationError

CreateAsyncTaskErrorBody: TypeAlias = (
    ValidationError
    | AuthenticationError
    | ForbiddenError
    | IdempotencyConflictError
    | QueueLimitError
    | InternalError
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreateAsyncTaskError:
    def map(self, status_code: int, content: bytes) -> CreateAsyncTaskErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationError](content)
            case 401:
                return decode_json[AuthenticationError](content)
            case 403:
                return decode_json[ForbiddenError](content)
            case 409:
                return decode_json[IdempotencyConflictError](content)
            case 429:
                return decode_json[QueueLimitError](content)
            case 500:
                return decode_json[InternalError](content)
            case _:
                return RawError(status_code, content)


create_async_task_error_mapper: Final[ErrorMapper[CreateAsyncTaskErrorBody]] = _CreateAsyncTaskError()
