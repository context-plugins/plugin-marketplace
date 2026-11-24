from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ReportsByIdOrSlugCopyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ReportsByIdOrSlugCopyError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ReportsByIdOrSlugCopyErrorBody:
        match status_code:
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_reports_by_id_or_slug_copy_error_mapper: Final[
    ErrorMapper[PostApiV1ReportsByIdOrSlugCopyErrorBody]
] = _PostApiV1ReportsByIdOrSlugCopyError()
