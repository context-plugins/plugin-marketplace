from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ResetCacheErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ResetCacheError:
    def map(self, status_code: int, content: bytes) -> ResetCacheErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


reset_cache_error_mapper: Final[ErrorMapper[ResetCacheErrorBody]] = _ResetCacheError()
