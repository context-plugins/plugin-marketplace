from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UntagQueueErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UntagQueueError:
    def map(self, status_code: int, content: bytes) -> UntagQueueErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


untag_queue_error_mapper: Final[ErrorMapper[UntagQueueErrorBody]] = _UntagQueueError()
