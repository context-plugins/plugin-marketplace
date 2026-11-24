from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1ReportsByIdOrSlugAnalyticsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1ReportsByIdOrSlugAnalyticsError:
    def map(self, status_code: int, content: bytes) -> GetApiV1ReportsByIdOrSlugAnalyticsErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_reports_by_id_or_slug_analytics_error_mapper: Final[
    ErrorMapper[GetApiV1ReportsByIdOrSlugAnalyticsErrorBody]
] = _GetApiV1ReportsByIdOrSlugAnalyticsError()
