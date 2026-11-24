from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

InvalidateProjectCacheErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _InvalidateProjectCacheError:
    def map(self, status_code: int, content: bytes) -> InvalidateProjectCacheErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


invalidate_project_cache_error_mapper: Final[
    ErrorMapper[InvalidateProjectCacheErrorBody]
] = _InvalidateProjectCacheError()
