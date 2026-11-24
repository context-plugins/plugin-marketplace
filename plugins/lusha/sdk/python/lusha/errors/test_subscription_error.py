from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TestSubscriptionErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TestSubscriptionError:
    def map(self, status_code: int, content: bytes) -> TestSubscriptionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


test_subscription_error_mapper: Final[ErrorMapper[TestSubscriptionErrorBody]] = _TestSubscriptionError()
