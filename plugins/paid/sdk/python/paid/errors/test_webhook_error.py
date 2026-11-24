from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TestWebhookErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TestWebhookError:
    def map(self, status_code: int, content: bytes) -> TestWebhookErrorBody:
        match status_code:
            case 400 | 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


test_webhook_error_mapper: Final[ErrorMapper[TestWebhookErrorBody]] = _TestWebhookError()
