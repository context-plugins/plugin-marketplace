from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListApiKeyEventsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListApiKeyEventsError:
    def map(self, status_code: int, content: bytes) -> ListApiKeyEventsErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_api_key_events_error_mapper: Final[ErrorMapper[ListApiKeyEventsErrorBody]] = _ListApiKeyEventsError()
