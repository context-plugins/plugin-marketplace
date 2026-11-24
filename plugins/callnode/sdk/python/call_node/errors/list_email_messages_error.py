from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListEmailMessagesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListEmailMessagesError:
    def map(self, status_code: int, content: bytes) -> ListEmailMessagesErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_email_messages_error_mapper: Final[ErrorMapper[ListEmailMessagesErrorBody]] = _ListEmailMessagesError()
