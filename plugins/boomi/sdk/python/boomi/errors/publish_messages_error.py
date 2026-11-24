from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_boomi_event_streams_rest_messages_api import ErrorResponseBoomiEventStreamsRestMessagesApi

PublishMessagesErrorBody: TypeAlias = ErrorResponseBoomiEventStreamsRestMessagesApi | RawError


@dataclass(frozen=True, slots=True)
class _PublishMessagesError:
    def map(self, status_code: int, content: bytes) -> PublishMessagesErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseBoomiEventStreamsRestMessagesApi](content)
            case 413 | 429:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


publish_messages_error_mapper: Final[ErrorMapper[PublishMessagesErrorBody]] = _PublishMessagesError()
