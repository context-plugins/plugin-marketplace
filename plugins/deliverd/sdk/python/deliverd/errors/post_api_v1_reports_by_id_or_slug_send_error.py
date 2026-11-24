from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ReportsByIdOrSlugSendErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ReportsByIdOrSlugSendError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ReportsByIdOrSlugSendErrorBody:
        match status_code:
            case 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_reports_by_id_or_slug_send_error_mapper: Final[
    ErrorMapper[PostApiV1ReportsByIdOrSlugSendErrorBody]
] = _PostApiV1ReportsByIdOrSlugSendError()
