from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteReportGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteReportGroupError:
    def map(self, status_code: int, content: bytes) -> DeleteReportGroupErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_report_group_error_mapper: Final[ErrorMapper[DeleteReportGroupErrorBody]] = _DeleteReportGroupError()
