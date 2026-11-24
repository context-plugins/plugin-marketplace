from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListQueueItemsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListQueueItemsError:
    def map(self, status_code: int, content: bytes) -> ListQueueItemsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_queue_items_error_mapper: Final[ErrorMapper[ListQueueItemsErrorBody]] = _ListQueueItemsError()
