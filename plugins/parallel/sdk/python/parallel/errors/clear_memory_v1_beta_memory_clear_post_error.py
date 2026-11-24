from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

ClearMemoryV1BetaMemoryClearPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ClearMemoryV1BetaMemoryClearPostError:
    def map(self, status_code: int, content: bytes) -> ClearMemoryV1BetaMemoryClearPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


clear_memory_v1_beta_memory_clear_post_error_mapper: Final[
    ErrorMapper[ClearMemoryV1BetaMemoryClearPostErrorBody]
] = _ClearMemoryV1BetaMemoryClearPostError()
