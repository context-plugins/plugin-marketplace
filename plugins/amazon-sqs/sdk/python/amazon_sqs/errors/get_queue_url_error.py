from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetQueueUrlErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetQueueUrlError:
    def map(self, status_code: int, content: bytes) -> GetQueueUrlErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_queue_url_error_mapper: Final[ErrorMapper[GetQueueUrlErrorBody]] = _GetQueueUrlError()
