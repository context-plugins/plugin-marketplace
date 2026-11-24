from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListReportsForReportGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListReportsForReportGroupError:
    def map(self, status_code: int, content: bytes) -> ListReportsForReportGroupErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_reports_for_report_group_error_mapper: Final[
    ErrorMapper[ListReportsForReportGroupErrorBody]
] = _ListReportsForReportGroupError()
