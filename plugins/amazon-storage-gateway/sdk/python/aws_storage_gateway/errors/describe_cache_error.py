from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeCacheErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeCacheError:
    def map(self, status_code: int, content: bytes) -> DescribeCacheErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_cache_error_mapper: Final[ErrorMapper[DescribeCacheErrorBody]] = _DescribeCacheError()
