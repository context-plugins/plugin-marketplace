from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_conversations400_error1 import ApiV1Conversations400Error1
from ..models.api_v1_conversations401_error1 import ApiV1Conversations401Error1
from ..models.api_v1_conversations403_error1 import ApiV1Conversations403Error1
from ..models.api_v1_conversations404_error1 import ApiV1Conversations404Error1
from ..models.api_v1_conversations429_error1 import ApiV1Conversations429Error1
from ..models.api_v1_conversations500_error1 import ApiV1Conversations500Error1
from ..models.api_v1_conversations502_error1 import ApiV1Conversations502Error1
from ..models.api_v1_conversations503_error1 import ApiV1Conversations503Error1
from ..models.api_v1_conversations504_error1 import ApiV1Conversations504Error1

ConversationGetErrorBody: TypeAlias = (
    ApiV1Conversations400Error1
    | ApiV1Conversations401Error1
    | ApiV1Conversations403Error1
    | ApiV1Conversations404Error1
    | ApiV1Conversations429Error1
    | ApiV1Conversations500Error1
    | ApiV1Conversations502Error1
    | ApiV1Conversations503Error1
    | ApiV1Conversations504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ConversationGetError:
    def map(self, status_code: int, content: bytes) -> ConversationGetErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Conversations400Error1](content)
            case 401:
                return decode_json[ApiV1Conversations401Error1](content)
            case 403:
                return decode_json[ApiV1Conversations403Error1](content)
            case 404:
                return decode_json[ApiV1Conversations404Error1](content)
            case 429:
                return decode_json[ApiV1Conversations429Error1](content)
            case 500:
                return decode_json[ApiV1Conversations500Error1](content)
            case 502:
                return decode_json[ApiV1Conversations502Error1](content)
            case 503:
                return decode_json[ApiV1Conversations503Error1](content)
            case 504:
                return decode_json[ApiV1Conversations504Error1](content)
            case _:
                return RawError(status_code, content)


conversation_get_error_mapper: Final[ErrorMapper[ConversationGetErrorBody]] = _ConversationGetError()
