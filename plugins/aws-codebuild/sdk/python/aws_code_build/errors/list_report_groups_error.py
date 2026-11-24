from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListReportGroupsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListReportGroupsError:
    def map(self, status_code: int, content: bytes) -> ListReportGroupsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_report_groups_error_mapper: Final[ErrorMapper[ListReportGroupsErrorBody]] = _ListReportGroupsError()
