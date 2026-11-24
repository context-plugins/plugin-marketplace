from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error import AuthenticationError
from ..models.internal_error import InternalError
from ..models.rate_limit_error import RateLimitError

ClearAsyncQueueErrorBody: TypeAlias = AuthenticationError | RateLimitError | InternalError | RawError


@dataclass(frozen=True, slots=True)
class _ClearAsyncQueueError:
    def map(self, status_code: int, content: bytes) -> ClearAsyncQueueErrorBody:
        match status_code:
            case 401:
                return decode_json[AuthenticationError](content)
            case 429:
                return decode_json[RateLimitError](content)
            case 500:
                return decode_json[InternalError](content)
            case _:
                return RawError(status_code, content)


clear_async_queue_error_mapper: Final[ErrorMapper[ClearAsyncQueueErrorBody]] = _ClearAsyncQueueError()
