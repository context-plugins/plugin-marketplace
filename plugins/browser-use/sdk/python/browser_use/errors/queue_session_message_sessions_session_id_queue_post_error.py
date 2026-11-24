from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_key_spend_limit_error import ApiKeySpendLimitError
from ..models.http_validation_error import HttpValidationError

QueueSessionMessageSessionsSessionIdQueuePostErrorBody: TypeAlias = (
    ApiKeySpendLimitError | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _QueueSessionMessageSessionsSessionIdQueuePostError:
    def map(self, status_code: int, content: bytes) -> QueueSessionMessageSessionsSessionIdQueuePostErrorBody:
        match status_code:
            case 402:
                return decode_json[ApiKeySpendLimitError](content)
            case 403 | 404 | 429:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


queue_session_message_sessions_session_id_queue_post_error_mapper: Final[
    ErrorMapper[QueueSessionMessageSessionsSessionIdQueuePostErrorBody]
] = _QueueSessionMessageSessionsSessionIdQueuePostError()
