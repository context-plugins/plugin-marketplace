from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ForkModelV2ModelsForkPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ForkModelV2ModelsForkPostError:
    def map(self, status_code: int, content: bytes) -> ForkModelV2ModelsForkPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


fork_model_v2_models_fork_post_error_mapper: Final[
    ErrorMapper[ForkModelV2ModelsForkPostErrorBody]
] = _ForkModelV2ModelsForkPostError()
