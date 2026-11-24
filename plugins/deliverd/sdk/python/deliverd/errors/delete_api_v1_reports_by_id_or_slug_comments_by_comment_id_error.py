from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError:
    def map(self, status_code: int, content: bytes) -> DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_api_v1_reports_by_id_or_slug_comments_by_comment_id_error_mapper: Final[
    ErrorMapper[DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody]
] = _DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError()
