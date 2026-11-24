from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeMaintenanceStartTimeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeMaintenanceStartTimeError:
    def map(self, status_code: int, content: bytes) -> DescribeMaintenanceStartTimeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_maintenance_start_time_error_mapper: Final[
    ErrorMapper[DescribeMaintenanceStartTimeErrorBody]
] = _DescribeMaintenanceStartTimeError()
