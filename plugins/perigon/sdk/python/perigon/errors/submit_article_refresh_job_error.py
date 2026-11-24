from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SubmitArticleRefreshJobErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SubmitArticleRefreshJobError:
    def map(self, status_code: int, content: bytes) -> SubmitArticleRefreshJobErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


submit_article_refresh_job_error_mapper: Final[
    ErrorMapper[SubmitArticleRefreshJobErrorBody]
] = _SubmitArticleRefreshJobError()
