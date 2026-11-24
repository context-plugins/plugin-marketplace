from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopBgpFailoverTestErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopBgpFailoverTestError:
    def map(self, status_code: int, content: bytes) -> StopBgpFailoverTestErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_bgp_failover_test_error_mapper: Final[ErrorMapper[StopBgpFailoverTestErrorBody]] = _StopBgpFailoverTestError()
