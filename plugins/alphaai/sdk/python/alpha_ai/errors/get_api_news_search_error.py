from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_news_search503_error1 import ApiNewsSearch503Error1
from ..models.error import Error

GetApiNewsSearchErrorBody: TypeAlias = Error | ApiNewsSearch503Error1 | RawError


@dataclass(frozen=True, slots=True)
class _GetApiNewsSearchError:
    def map(self, status_code: int, content: bytes) -> GetApiNewsSearchErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case 401 | 403 | 429:
                return decode_json[Error](content)
            case 503:
                return decode_json[ApiNewsSearch503Error1](content)
            case _:
                return RawError(status_code, content)


get_api_news_search_error_mapper: Final[ErrorMapper[GetApiNewsSearchErrorBody]] = _GetApiNewsSearchError()
