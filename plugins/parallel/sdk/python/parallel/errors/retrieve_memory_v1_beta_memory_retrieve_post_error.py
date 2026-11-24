from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

RetrieveMemoryV1BetaMemoryRetrievePostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _RetrieveMemoryV1BetaMemoryRetrievePostError:
    def map(self, status_code: int, content: bytes) -> RetrieveMemoryV1BetaMemoryRetrievePostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


retrieve_memory_v1_beta_memory_retrieve_post_error_mapper: Final[
    ErrorMapper[RetrieveMemoryV1BetaMemoryRetrievePostErrorBody]
] = _RetrieveMemoryV1BetaMemoryRetrievePostError()
