from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SendChatMessageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SendChatMessageError:
    def map(self, status_code: int, content: bytes) -> SendChatMessageErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


send_chat_message_error_mapper: Final[ErrorMapper[SendChatMessageErrorBody]] = _SendChatMessageError()
