from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateBandwidthRateLimitErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateBandwidthRateLimitError:
    def map(self, status_code: int, content: bytes) -> UpdateBandwidthRateLimitErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_bandwidth_rate_limit_error_mapper: Final[
    ErrorMapper[UpdateBandwidthRateLimitErrorBody]
] = _UpdateBandwidthRateLimitError()
