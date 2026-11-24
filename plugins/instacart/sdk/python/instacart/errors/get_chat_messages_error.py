from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetChatMessagesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetChatMessagesError:
    def map(self, status_code: int, content: bytes) -> GetChatMessagesErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_chat_messages_error_mapper: Final[ErrorMapper[GetChatMessagesErrorBody]] = _GetChatMessagesError()
