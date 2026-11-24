from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DeleteSpendLimitV2LimitsLimitIdDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_spend_limit_v2_limits_limit_id_delete_error_mapper: Final[
    ErrorMapper[DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody]
] = _DeleteSpendLimitV2LimitsLimitIdDeleteError()
