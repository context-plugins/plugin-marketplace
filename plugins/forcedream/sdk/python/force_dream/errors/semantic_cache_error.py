from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SemanticCacheErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SemanticCacheError:
    def map(self, status_code: int, content: bytes) -> SemanticCacheErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


semantic_cache_error_mapper: Final[ErrorMapper[SemanticCacheErrorBody]] = _SemanticCacheError()
