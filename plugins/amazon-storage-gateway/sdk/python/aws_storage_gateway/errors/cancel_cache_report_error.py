from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CancelCacheReportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CancelCacheReportError:
    def map(self, status_code: int, content: bytes) -> CancelCacheReportErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


cancel_cache_report_error_mapper: Final[ErrorMapper[CancelCacheReportErrorBody]] = _CancelCacheReportError()
