from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

AddQueueItemErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _AddQueueItemError:
    def map(self, status_code: int, content: bytes) -> AddQueueItemErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


add_queue_item_error_mapper: Final[ErrorMapper[AddQueueItemErrorBody]] = _AddQueueItemError()
