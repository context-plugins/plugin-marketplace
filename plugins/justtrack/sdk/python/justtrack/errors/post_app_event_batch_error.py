from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostAppEventBatchErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostAppEventBatchError:
    def map(self, status_code: int, content: bytes) -> PostAppEventBatchErrorBody:
        match status_code:
            case 400 | 401 | 500:
                return decode_json[ErrorResponse](content)
            case 502:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_app_event_batch_error_mapper: Final[ErrorMapper[PostAppEventBatchErrorBody]] = _PostAppEventBatchError()
