from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_conversations_messages_reaction400_error1 import ApiV1ConversationsMessagesReaction400Error1
from ..models.api_v1_conversations_messages_reaction401_error1 import ApiV1ConversationsMessagesReaction401Error1
from ..models.api_v1_conversations_messages_reaction403_error1 import ApiV1ConversationsMessagesReaction403Error1
from ..models.api_v1_conversations_messages_reaction404_error1 import ApiV1ConversationsMessagesReaction404Error1
from ..models.api_v1_conversations_messages_reaction429_error1 import ApiV1ConversationsMessagesReaction429Error1
from ..models.api_v1_conversations_messages_reaction500_error1 import ApiV1ConversationsMessagesReaction500Error1
from ..models.api_v1_conversations_messages_reaction502_error1 import ApiV1ConversationsMessagesReaction502Error1
from ..models.api_v1_conversations_messages_reaction503_error1 import ApiV1ConversationsMessagesReaction503Error1
from ..models.api_v1_conversations_messages_reaction504_error1 import ApiV1ConversationsMessagesReaction504Error1

ConversationReactMessageErrorBody: TypeAlias = (
    ApiV1ConversationsMessagesReaction400Error1
    | ApiV1ConversationsMessagesReaction401Error1
    | ApiV1ConversationsMessagesReaction403Error1
    | ApiV1ConversationsMessagesReaction404Error1
    | ApiV1ConversationsMessagesReaction429Error1
    | ApiV1ConversationsMessagesReaction500Error1
    | ApiV1ConversationsMessagesReaction502Error1
    | ApiV1ConversationsMessagesReaction503Error1
    | ApiV1ConversationsMessagesReaction504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ConversationReactMessageError:
    def map(self, status_code: int, content: bytes) -> ConversationReactMessageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1ConversationsMessagesReaction400Error1](content)
            case 401:
                return decode_json[ApiV1ConversationsMessagesReaction401Error1](content)
            case 403:
                return decode_json[ApiV1ConversationsMessagesReaction403Error1](content)
            case 404:
                return decode_json[ApiV1ConversationsMessagesReaction404Error1](content)
            case 429:
                return decode_json[ApiV1ConversationsMessagesReaction429Error1](content)
            case 500:
                return decode_json[ApiV1ConversationsMessagesReaction500Error1](content)
            case 502:
                return decode_json[ApiV1ConversationsMessagesReaction502Error1](content)
            case 503:
                return decode_json[ApiV1ConversationsMessagesReaction503Error1](content)
            case 504:
                return decode_json[ApiV1ConversationsMessagesReaction504Error1](content)
            case _:
                return RawError(status_code, content)


conversation_react_message_error_mapper: Final[
    ErrorMapper[ConversationReactMessageErrorBody]
] = _ConversationReactMessageError()
