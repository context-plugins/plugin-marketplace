from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiNewsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiNewsError:
    def map(self, status_code: int, content: bytes) -> GetApiNewsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case 401 | 403 | 409 | 429 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_news_error_mapper: Final[ErrorMapper[GetApiNewsErrorBody]] = _GetApiNewsError()
