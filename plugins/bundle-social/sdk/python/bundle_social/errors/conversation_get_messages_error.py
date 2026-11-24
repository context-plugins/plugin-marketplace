from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_conversations_messages400_error1 import ApiV1ConversationsMessages400Error1
from ..models.api_v1_conversations_messages401_error1 import ApiV1ConversationsMessages401Error1
from ..models.api_v1_conversations_messages403_error1 import ApiV1ConversationsMessages403Error1
from ..models.api_v1_conversations_messages404_error1 import ApiV1ConversationsMessages404Error1
from ..models.api_v1_conversations_messages429_error1 import ApiV1ConversationsMessages429Error1
from ..models.api_v1_conversations_messages500_error1 import ApiV1ConversationsMessages500Error1
from ..models.api_v1_conversations_messages502_error1 import ApiV1ConversationsMessages502Error1
from ..models.api_v1_conversations_messages503_error1 import ApiV1ConversationsMessages503Error1
from ..models.api_v1_conversations_messages504_error1 import ApiV1ConversationsMessages504Error1

ConversationGetMessagesErrorBody: TypeAlias = (
    ApiV1ConversationsMessages400Error1
    | ApiV1ConversationsMessages401Error1
    | ApiV1ConversationsMessages403Error1
    | ApiV1ConversationsMessages404Error1
    | ApiV1ConversationsMessages429Error1
    | ApiV1ConversationsMessages500Error1
    | ApiV1ConversationsMessages502Error1
    | ApiV1ConversationsMessages503Error1
    | ApiV1ConversationsMessages504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ConversationGetMessagesError:
    def map(self, status_code: int, content: bytes) -> ConversationGetMessagesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1ConversationsMessages400Error1](content)
            case 401:
                return decode_json[ApiV1ConversationsMessages401Error1](content)
            case 403:
                return decode_json[ApiV1ConversationsMessages403Error1](content)
            case 404:
                return decode_json[ApiV1ConversationsMessages404Error1](content)
            case 429:
                return decode_json[ApiV1ConversationsMessages429Error1](content)
            case 500:
                return decode_json[ApiV1ConversationsMessages500Error1](content)
            case 502:
                return decode_json[ApiV1ConversationsMessages502Error1](content)
            case 503:
                return decode_json[ApiV1ConversationsMessages503Error1](content)
            case 504:
                return decode_json[ApiV1ConversationsMessages504Error1](content)
            case _:
                return RawError(status_code, content)


conversation_get_messages_error_mapper: Final[
    ErrorMapper[ConversationGetMessagesErrorBody]
] = _ConversationGetMessagesError()
