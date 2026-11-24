from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

SubmitV2RolloutsSubmitPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _SubmitV2RolloutsSubmitPostError:
    def map(self, status_code: int, content: bytes) -> SubmitV2RolloutsSubmitPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


submit_v2_rollouts_submit_post_error_mapper: Final[
    ErrorMapper[SubmitV2RolloutsSubmitPostErrorBody]
] = _SubmitV2RolloutsSubmitPostError()
