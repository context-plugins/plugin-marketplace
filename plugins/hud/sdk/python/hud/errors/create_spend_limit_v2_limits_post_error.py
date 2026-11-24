from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CreateSpendLimitV2LimitsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateSpendLimitV2LimitsPostError:
    def map(self, status_code: int, content: bytes) -> CreateSpendLimitV2LimitsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_spend_limit_v2_limits_post_error_mapper: Final[
    ErrorMapper[CreateSpendLimitV2LimitsPostErrorBody]
] = _CreateSpendLimitV2LimitsPostError()
