from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeCacheReportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeCacheReportError:
    def map(self, status_code: int, content: bytes) -> DescribeCacheReportErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_cache_report_error_mapper: Final[ErrorMapper[DescribeCacheReportErrorBody]] = _DescribeCacheReportError()
