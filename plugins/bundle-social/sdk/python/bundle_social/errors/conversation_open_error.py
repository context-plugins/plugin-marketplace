from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_conversations_open400_error1 import ApiV1ConversationsOpen400Error1
from ..models.api_v1_conversations_open401_error1 import ApiV1ConversationsOpen401Error1
from ..models.api_v1_conversations_open403_error1 import ApiV1ConversationsOpen403Error1
from ..models.api_v1_conversations_open404_error1 import ApiV1ConversationsOpen404Error1
from ..models.api_v1_conversations_open429_error1 import ApiV1ConversationsOpen429Error1
from ..models.api_v1_conversations_open500_error1 import ApiV1ConversationsOpen500Error1
from ..models.api_v1_conversations_open502_error1 import ApiV1ConversationsOpen502Error1
from ..models.api_v1_conversations_open503_error1 import ApiV1ConversationsOpen503Error1
from ..models.api_v1_conversations_open504_error1 import ApiV1ConversationsOpen504Error1

ConversationOpenErrorBody: TypeAlias = (
    ApiV1ConversationsOpen400Error1
    | ApiV1ConversationsOpen401Error1
    | ApiV1ConversationsOpen403Error1
    | ApiV1ConversationsOpen404Error1
    | ApiV1ConversationsOpen429Error1
    | ApiV1ConversationsOpen500Error1
    | ApiV1ConversationsOpen502Error1
    | ApiV1ConversationsOpen503Error1
    | ApiV1ConversationsOpen504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ConversationOpenError:
    def map(self, status_code: int, content: bytes) -> ConversationOpenErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1ConversationsOpen400Error1](content)
            case 401:
                return decode_json[ApiV1ConversationsOpen401Error1](content)
            case 403:
                return decode_json[ApiV1ConversationsOpen403Error1](content)
            case 404:
                return decode_json[ApiV1ConversationsOpen404Error1](content)
            case 429:
                return decode_json[ApiV1ConversationsOpen429Error1](content)
            case 500:
                return decode_json[ApiV1ConversationsOpen500Error1](content)
            case 502:
                return decode_json[ApiV1ConversationsOpen502Error1](content)
            case 503:
                return decode_json[ApiV1ConversationsOpen503Error1](content)
            case 504:
                return decode_json[ApiV1ConversationsOpen504Error1](content)
            case _:
                return RawError(status_code, content)


conversation_open_error_mapper: Final[ErrorMapper[ConversationOpenErrorBody]] = _ConversationOpenError()
