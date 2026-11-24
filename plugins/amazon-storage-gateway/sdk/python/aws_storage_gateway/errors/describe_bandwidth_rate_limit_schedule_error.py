from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeBandwidthRateLimitScheduleErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeBandwidthRateLimitScheduleError:
    def map(self, status_code: int, content: bytes) -> DescribeBandwidthRateLimitScheduleErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_bandwidth_rate_limit_schedule_error_mapper: Final[
    ErrorMapper[DescribeBandwidthRateLimitScheduleErrorBody]
] = _DescribeBandwidthRateLimitScheduleError()
