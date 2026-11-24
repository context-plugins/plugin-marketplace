from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartBgpFailoverTestErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartBgpFailoverTestError:
    def map(self, status_code: int, content: bytes) -> StartBgpFailoverTestErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_bgp_failover_test_error_mapper: Final[ErrorMapper[StartBgpFailoverTestErrorBody]] = _StartBgpFailoverTestError()
