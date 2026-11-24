from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automation_rich_messages_conversations400_error1 import (
    ApiV1AutomationRichMessagesConversations400Error1,
)
from ..models.api_v1_automation_rich_messages_conversations401_error1 import (
    ApiV1AutomationRichMessagesConversations401Error1,
)
from ..models.api_v1_automation_rich_messages_conversations403_error1 import (
    ApiV1AutomationRichMessagesConversations403Error1,
)
from ..models.api_v1_automation_rich_messages_conversations404_error1 import (
    ApiV1AutomationRichMessagesConversations404Error1,
)
from ..models.api_v1_automation_rich_messages_conversations429_error1 import (
    ApiV1AutomationRichMessagesConversations429Error1,
)
from ..models.api_v1_automation_rich_messages_conversations500_error1 import (
    ApiV1AutomationRichMessagesConversations500Error1,
)
from ..models.api_v1_automation_rich_messages_conversations502_error1 import (
    ApiV1AutomationRichMessagesConversations502Error1,
)
from ..models.api_v1_automation_rich_messages_conversations503_error1 import (
    ApiV1AutomationRichMessagesConversations503Error1,
)
from ..models.api_v1_automation_rich_messages_conversations504_error1 import (
    ApiV1AutomationRichMessagesConversations504Error1,
)

AutomationSendRichMessageErrorBody: TypeAlias = (
    ApiV1AutomationRichMessagesConversations400Error1
    | ApiV1AutomationRichMessagesConversations401Error1
    | ApiV1AutomationRichMessagesConversations403Error1
    | ApiV1AutomationRichMessagesConversations404Error1
    | ApiV1AutomationRichMessagesConversations429Error1
    | ApiV1AutomationRichMessagesConversations500Error1
    | ApiV1AutomationRichMessagesConversations502Error1
    | ApiV1AutomationRichMessagesConversations503Error1
    | ApiV1AutomationRichMessagesConversations504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationSendRichMessageError:
    def map(self, status_code: int, content: bytes) -> AutomationSendRichMessageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationRichMessagesConversations400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationRichMessagesConversations401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationRichMessagesConversations403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationRichMessagesConversations404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationRichMessagesConversations429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationRichMessagesConversations500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationRichMessagesConversations502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationRichMessagesConversations503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationRichMessagesConversations504Error1](content)
            case _:
                return RawError(status_code, content)


automation_send_rich_message_error_mapper: Final[
    ErrorMapper[AutomationSendRichMessageErrorBody]
] = _AutomationSendRichMessageError()
