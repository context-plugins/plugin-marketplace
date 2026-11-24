from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListSharedReportGroupsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListSharedReportGroupsError:
    def map(self, status_code: int, content: bytes) -> ListSharedReportGroupsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_shared_report_groups_error_mapper: Final[
    ErrorMapper[ListSharedReportGroupsErrorBody]
] = _ListSharedReportGroupsError()
