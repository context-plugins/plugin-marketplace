from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_sent_messages400_error1 import ApiV2SentMessages400Error1

GetSentMessageErrorBody: TypeAlias = ApiV2SentMessages400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _GetSentMessageError:
    def map(self, status_code: int, content: bytes) -> GetSentMessageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV2SentMessages400Error1](content)
            case _:
                return RawError(status_code, content)


get_sent_message_error_mapper: Final[ErrorMapper[GetSentMessageErrorBody]] = _GetSentMessageError()
