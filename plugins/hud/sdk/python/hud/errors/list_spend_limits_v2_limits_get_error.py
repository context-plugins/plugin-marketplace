from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListSpendLimitsV2LimitsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListSpendLimitsV2LimitsGetError:
    def map(self, status_code: int, content: bytes) -> ListSpendLimitsV2LimitsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_spend_limits_v2_limits_get_error_mapper: Final[
    ErrorMapper[ListSpendLimitsV2LimitsGetErrorBody]
] = _ListSpendLimitsV2LimitsGetError()
