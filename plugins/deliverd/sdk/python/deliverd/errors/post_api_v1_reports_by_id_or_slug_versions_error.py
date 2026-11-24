from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_reports_versions409_error1 import ApiV1ReportsVersions409Error1

PostApiV1ReportsByIdOrSlugVersionsErrorBody: TypeAlias = ApiV1ReportsVersions409Error1 | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ReportsByIdOrSlugVersionsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ReportsByIdOrSlugVersionsErrorBody:
        match status_code:
            case 409:
                return decode_json[ApiV1ReportsVersions409Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_reports_by_id_or_slug_versions_error_mapper: Final[
    ErrorMapper[PostApiV1ReportsByIdOrSlugVersionsErrorBody]
] = _PostApiV1ReportsByIdOrSlugVersionsError()
