from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_conversations_read400_error1 import ApiV1ConversationsRead400Error1
from ..models.api_v1_conversations_read401_error1 import ApiV1ConversationsRead401Error1
from ..models.api_v1_conversations_read403_error1 import ApiV1ConversationsRead403Error1
from ..models.api_v1_conversations_read404_error1 import ApiV1ConversationsRead404Error1
from ..models.api_v1_conversations_read429_error1 import ApiV1ConversationsRead429Error1
from ..models.api_v1_conversations_read500_error1 import ApiV1ConversationsRead500Error1
from ..models.api_v1_conversations_read502_error1 import ApiV1ConversationsRead502Error1
from ..models.api_v1_conversations_read503_error1 import ApiV1ConversationsRead503Error1
from ..models.api_v1_conversations_read504_error1 import ApiV1ConversationsRead504Error1

ConversationMarkReadErrorBody: TypeAlias = (
    ApiV1ConversationsRead400Error1
    | ApiV1ConversationsRead401Error1
    | ApiV1ConversationsRead403Error1
    | ApiV1ConversationsRead404Error1
    | ApiV1ConversationsRead429Error1
    | ApiV1ConversationsRead500Error1
    | ApiV1ConversationsRead502Error1
    | ApiV1ConversationsRead503Error1
    | ApiV1ConversationsRead504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ConversationMarkReadError:
    def map(self, status_code: int, content: bytes) -> ConversationMarkReadErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1ConversationsRead400Error1](content)
            case 401:
                return decode_json[ApiV1ConversationsRead401Error1](content)
            case 403:
                return decode_json[ApiV1ConversationsRead403Error1](content)
            case 404:
                return decode_json[ApiV1ConversationsRead404Error1](content)
            case 429:
                return decode_json[ApiV1ConversationsRead429Error1](content)
            case 500:
                return decode_json[ApiV1ConversationsRead500Error1](content)
            case 502:
                return decode_json[ApiV1ConversationsRead502Error1](content)
            case 503:
                return decode_json[ApiV1ConversationsRead503Error1](content)
            case 504:
                return decode_json[ApiV1ConversationsRead504Error1](content)
            case _:
                return RawError(status_code, content)


conversation_mark_read_error_mapper: Final[ErrorMapper[ConversationMarkReadErrorBody]] = _ConversationMarkReadError()
