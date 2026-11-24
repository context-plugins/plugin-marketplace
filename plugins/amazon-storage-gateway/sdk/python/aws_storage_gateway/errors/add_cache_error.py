from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AddCacheErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AddCacheError:
    def map(self, status_code: int, content: bytes) -> AddCacheErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


add_cache_error_mapper: Final[ErrorMapper[AddCacheErrorBody]] = _AddCacheError()
