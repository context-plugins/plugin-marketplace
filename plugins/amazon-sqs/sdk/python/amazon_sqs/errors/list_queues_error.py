from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListQueuesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListQueuesError:
    def map(self, status_code: int, content: bytes) -> ListQueuesErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_queues_error_mapper: Final[ErrorMapper[ListQueuesErrorBody]] = _ListQueuesError()
