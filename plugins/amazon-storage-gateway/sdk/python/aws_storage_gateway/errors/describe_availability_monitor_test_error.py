from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeAvailabilityMonitorTestErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeAvailabilityMonitorTestError:
    def map(self, status_code: int, content: bytes) -> DescribeAvailabilityMonitorTestErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_availability_monitor_test_error_mapper: Final[
    ErrorMapper[DescribeAvailabilityMonitorTestErrorBody]
] = _DescribeAvailabilityMonitorTestError()
