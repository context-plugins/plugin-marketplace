from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiNewsTrendingErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiNewsTrendingError:
    def map(self, status_code: int, content: bytes) -> GetApiNewsTrendingErrorBody:
        match status_code:
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_news_trending_error_mapper: Final[ErrorMapper[GetApiNewsTrendingErrorBody]] = _GetApiNewsTrendingError()
