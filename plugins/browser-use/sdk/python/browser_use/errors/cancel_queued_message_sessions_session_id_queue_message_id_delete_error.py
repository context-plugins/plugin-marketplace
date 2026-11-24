from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError:
    def map(
        self, status_code: int, content: bytes
    ) -> CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody:
        match status_code:
            case 403 | 404 | 409:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


cancel_queued_message_sessions_session_id_queue_message_id_delete_error_mapper: Final[
    ErrorMapper[CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody]
] = _CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError()
