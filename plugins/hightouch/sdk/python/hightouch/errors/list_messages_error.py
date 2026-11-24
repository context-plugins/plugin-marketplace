from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMessagesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMessagesError:
    def map(self, status_code: int, content: bytes) -> ListMessagesErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_messages_error_mapper: Final[ErrorMapper[ListMessagesErrorBody]] = _ListMessagesError()
