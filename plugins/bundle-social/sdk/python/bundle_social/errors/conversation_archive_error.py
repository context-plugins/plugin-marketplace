from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_conversations_archive400_error1 import ApiV1ConversationsArchive400Error1
from ..models.api_v1_conversations_archive401_error1 import ApiV1ConversationsArchive401Error1
from ..models.api_v1_conversations_archive403_error1 import ApiV1ConversationsArchive403Error1
from ..models.api_v1_conversations_archive404_error1 import ApiV1ConversationsArchive404Error1
from ..models.api_v1_conversations_archive429_error1 import ApiV1ConversationsArchive429Error1
from ..models.api_v1_conversations_archive500_error1 import ApiV1ConversationsArchive500Error1
from ..models.api_v1_conversations_archive502_error1 import ApiV1ConversationsArchive502Error1
from ..models.api_v1_conversations_archive503_error1 import ApiV1ConversationsArchive503Error1
from ..models.api_v1_conversations_archive504_error1 import ApiV1ConversationsArchive504Error1

ConversationArchiveErrorBody: TypeAlias = (
    ApiV1ConversationsArchive400Error1
    | ApiV1ConversationsArchive401Error1
    | ApiV1ConversationsArchive403Error1
    | ApiV1ConversationsArchive404Error1
    | ApiV1ConversationsArchive429Error1
    | ApiV1ConversationsArchive500Error1
    | ApiV1ConversationsArchive502Error1
    | ApiV1ConversationsArchive503Error1
    | ApiV1ConversationsArchive504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ConversationArchiveError:
    def map(self, status_code: int, content: bytes) -> ConversationArchiveErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1ConversationsArchive400Error1](content)
            case 401:
                return decode_json[ApiV1ConversationsArchive401Error1](content)
            case 403:
                return decode_json[ApiV1ConversationsArchive403Error1](content)
            case 404:
                return decode_json[ApiV1ConversationsArchive404Error1](content)
            case 429:
                return decode_json[ApiV1ConversationsArchive429Error1](content)
            case 500:
                return decode_json[ApiV1ConversationsArchive500Error1](content)
            case 502:
                return decode_json[ApiV1ConversationsArchive502Error1](content)
            case 503:
                return decode_json[ApiV1ConversationsArchive503Error1](content)
            case 504:
                return decode_json[ApiV1ConversationsArchive504Error1](content)
            case _:
                return RawError(status_code, content)


conversation_archive_error_mapper: Final[ErrorMapper[ConversationArchiveErrorBody]] = _ConversationArchiveError()
