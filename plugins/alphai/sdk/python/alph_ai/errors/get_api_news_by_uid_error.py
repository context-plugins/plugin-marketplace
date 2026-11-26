from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiNewsByUidErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiNewsByUidError:
    def map(self, status_code: int, content: bytes) -> GetApiNewsByUidErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_news_by_uid_error_mapper: Final[ErrorMapper[GetApiNewsByUidErrorBody]] = _GetApiNewsByUidError()
