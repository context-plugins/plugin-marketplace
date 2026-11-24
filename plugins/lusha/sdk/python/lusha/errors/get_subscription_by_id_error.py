from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetSubscriptionByIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetSubscriptionByIdError:
    def map(self, status_code: int, content: bytes) -> GetSubscriptionByIdErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_subscription_by_id_error_mapper: Final[ErrorMapper[GetSubscriptionByIdErrorBody]] = _GetSubscriptionByIdError()
