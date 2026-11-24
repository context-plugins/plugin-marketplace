from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_conversations_private_reply400_error1 import ApiV1ConversationsPrivateReply400Error1
from ..models.api_v1_conversations_private_reply401_error1 import ApiV1ConversationsPrivateReply401Error1
from ..models.api_v1_conversations_private_reply403_error1 import ApiV1ConversationsPrivateReply403Error1
from ..models.api_v1_conversations_private_reply404_error1 import ApiV1ConversationsPrivateReply404Error1
from ..models.api_v1_conversations_private_reply429_error1 import ApiV1ConversationsPrivateReply429Error1
from ..models.api_v1_conversations_private_reply500_error1 import ApiV1ConversationsPrivateReply500Error1
from ..models.api_v1_conversations_private_reply502_error1 import ApiV1ConversationsPrivateReply502Error1
from ..models.api_v1_conversations_private_reply503_error1 import ApiV1ConversationsPrivateReply503Error1
from ..models.api_v1_conversations_private_reply504_error1 import ApiV1ConversationsPrivateReply504Error1

ConversationPrivateReplyErrorBody: TypeAlias = (
    ApiV1ConversationsPrivateReply400Error1
    | ApiV1ConversationsPrivateReply401Error1
    | ApiV1ConversationsPrivateReply403Error1
    | ApiV1ConversationsPrivateReply404Error1
    | ApiV1ConversationsPrivateReply429Error1
    | ApiV1ConversationsPrivateReply500Error1
    | ApiV1ConversationsPrivateReply502Error1
    | ApiV1ConversationsPrivateReply503Error1
    | ApiV1ConversationsPrivateReply504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ConversationPrivateReplyError:
    def map(self, status_code: int, content: bytes) -> ConversationPrivateReplyErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1ConversationsPrivateReply400Error1](content)
            case 401:
                return decode_json[ApiV1ConversationsPrivateReply401Error1](content)
            case 403:
                return decode_json[ApiV1ConversationsPrivateReply403Error1](content)
            case 404:
                return decode_json[ApiV1ConversationsPrivateReply404Error1](content)
            case 429:
                return decode_json[ApiV1ConversationsPrivateReply429Error1](content)
            case 500:
                return decode_json[ApiV1ConversationsPrivateReply500Error1](content)
            case 502:
                return decode_json[ApiV1ConversationsPrivateReply502Error1](content)
            case 503:
                return decode_json[ApiV1ConversationsPrivateReply503Error1](content)
            case 504:
                return decode_json[ApiV1ConversationsPrivateReply504Error1](content)
            case _:
                return RawError(status_code, content)


conversation_private_reply_error_mapper: Final[
    ErrorMapper[ConversationPrivateReplyErrorBody]
] = _ConversationPrivateReplyError()
