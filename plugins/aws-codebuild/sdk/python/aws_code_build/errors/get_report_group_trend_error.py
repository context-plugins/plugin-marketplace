from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetReportGroupTrendErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetReportGroupTrendError:
    def map(self, status_code: int, content: bytes) -> GetReportGroupTrendErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_report_group_trend_error_mapper: Final[ErrorMapper[GetReportGroupTrendErrorBody]] = _GetReportGroupTrendError()
