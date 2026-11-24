from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetReportGroupsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetReportGroupsError:
    def map(self, status_code: int, content: bytes) -> BatchGetReportGroupsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_report_groups_error_mapper: Final[ErrorMapper[BatchGetReportGroupsErrorBody]] = _BatchGetReportGroupsError()
