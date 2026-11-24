from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ReportsByIdOrSlugRevisionBriefsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_reports_by_id_or_slug_revision_briefs_error_mapper: Final[
    ErrorMapper[PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody]
] = _PostApiV1ReportsByIdOrSlugRevisionBriefsError()
