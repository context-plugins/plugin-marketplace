from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCacheReportsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCacheReportsError:
    def map(self, status_code: int, content: bytes) -> ListCacheReportsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_cache_reports_error_mapper: Final[ErrorMapper[ListCacheReportsErrorBody]] = _ListCacheReportsError()
