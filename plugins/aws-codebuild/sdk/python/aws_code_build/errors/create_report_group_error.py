from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateReportGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateReportGroupError:
    def map(self, status_code: int, content: bytes) -> CreateReportGroupErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_report_group_error_mapper: Final[ErrorMapper[CreateReportGroupErrorBody]] = _CreateReportGroupError()
