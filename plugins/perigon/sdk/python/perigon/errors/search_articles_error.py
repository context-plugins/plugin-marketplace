from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SearchArticlesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SearchArticlesError:
    def map(self, status_code: int, content: bytes) -> SearchArticlesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


search_articles_error_mapper: Final[ErrorMapper[SearchArticlesErrorBody]] = _SearchArticlesError()
