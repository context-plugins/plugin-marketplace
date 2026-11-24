from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateReportGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateReportGroupError:
    def map(self, status_code: int, content: bytes) -> UpdateReportGroupErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_report_group_error_mapper: Final[ErrorMapper[UpdateReportGroupErrorBody]] = _UpdateReportGroupError()
