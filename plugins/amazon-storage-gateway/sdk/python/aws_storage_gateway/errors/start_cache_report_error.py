from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartCacheReportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartCacheReportError:
    def map(self, status_code: int, content: bytes) -> StartCacheReportErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_cache_report_error_mapper: Final[ErrorMapper[StartCacheReportErrorBody]] = _StartCacheReportError()
