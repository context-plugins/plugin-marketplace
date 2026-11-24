from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PurgeQueueErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PurgeQueueError:
    def map(self, status_code: int, content: bytes) -> PurgeQueueErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


purge_queue_error_mapper: Final[ErrorMapper[PurgeQueueErrorBody]] = _PurgeQueueError()
