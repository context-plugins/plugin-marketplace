from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteAvaConversationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAvaConversationError:
    def map(self, status_code: int, content: bytes) -> DeleteAvaConversationErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_ava_conversation_error_mapper: Final[ErrorMapper[DeleteAvaConversationErrorBody]] = _DeleteAvaConversationError()
