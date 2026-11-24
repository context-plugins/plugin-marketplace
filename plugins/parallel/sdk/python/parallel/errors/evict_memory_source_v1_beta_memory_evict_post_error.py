from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

EvictMemorySourceV1BetaMemoryEvictPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _EvictMemorySourceV1BetaMemoryEvictPostError:
    def map(self, status_code: int, content: bytes) -> EvictMemorySourceV1BetaMemoryEvictPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


evict_memory_source_v1_beta_memory_evict_post_error_mapper: Final[
    ErrorMapper[EvictMemorySourceV1BetaMemoryEvictPostErrorBody]
] = _EvictMemorySourceV1BetaMemoryEvictPostError()
