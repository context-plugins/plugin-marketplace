from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TagQueueErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TagQueueError:
    def map(self, status_code: int, content: bytes) -> TagQueueErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


tag_queue_error_mapper: Final[ErrorMapper[TagQueueErrorBody]] = _TagQueueError()
