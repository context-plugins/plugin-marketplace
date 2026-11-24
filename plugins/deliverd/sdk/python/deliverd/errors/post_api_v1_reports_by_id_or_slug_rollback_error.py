from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ReportsByIdOrSlugRollbackErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ReportsByIdOrSlugRollbackError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ReportsByIdOrSlugRollbackErrorBody:
        match status_code:
            case 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_reports_by_id_or_slug_rollback_error_mapper: Final[
    ErrorMapper[PostApiV1ReportsByIdOrSlugRollbackErrorBody]
] = _PostApiV1ReportsByIdOrSlugRollbackError()
