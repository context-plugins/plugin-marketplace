from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetEngagementsSummaryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetEngagementsSummaryError:
    def map(self, status_code: int, content: bytes) -> GetEngagementsSummaryErrorBody:
        match status_code:
            case 400 | 403 | 404 | 410 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_engagements_summary_error_mapper: Final[ErrorMapper[GetEngagementsSummaryErrorBody]] = _GetEngagementsSummaryError()
