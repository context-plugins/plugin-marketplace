from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PeekArticleRefreshErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PeekArticleRefreshError:
    def map(self, status_code: int, content: bytes) -> PeekArticleRefreshErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


peek_article_refresh_error_mapper: Final[ErrorMapper[PeekArticleRefreshErrorBody]] = _PeekArticleRefreshError()
