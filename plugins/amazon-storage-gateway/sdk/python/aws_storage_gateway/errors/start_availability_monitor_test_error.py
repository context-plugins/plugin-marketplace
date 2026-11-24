from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartAvailabilityMonitorTestErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartAvailabilityMonitorTestError:
    def map(self, status_code: int, content: bytes) -> StartAvailabilityMonitorTestErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_availability_monitor_test_error_mapper: Final[
    ErrorMapper[StartAvailabilityMonitorTestErrorBody]
] = _StartAvailabilityMonitorTestError()
