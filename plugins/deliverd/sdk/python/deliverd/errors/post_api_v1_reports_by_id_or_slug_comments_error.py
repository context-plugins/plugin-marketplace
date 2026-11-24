from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ReportsByIdOrSlugCommentsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ReportsByIdOrSlugCommentsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ReportsByIdOrSlugCommentsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_reports_by_id_or_slug_comments_error_mapper: Final[
    ErrorMapper[PostApiV1ReportsByIdOrSlugCommentsErrorBody]
] = _PostApiV1ReportsByIdOrSlugCommentsError()
