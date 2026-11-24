from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RefreshCacheErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RefreshCacheError:
    def map(self, status_code: int, content: bytes) -> RefreshCacheErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


refresh_cache_error_mapper: Final[ErrorMapper[RefreshCacheErrorBody]] = _RefreshCacheError()
