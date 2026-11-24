from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.json_error_response import JsonErrorResponse

DeleteWebhookErrorBody: TypeAlias = JsonErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWebhookError:
    def map(self, status_code: int, content: bytes) -> DeleteWebhookErrorBody:
        match status_code:
            case 400:
                return decode_json[JsonErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_webhook_error_mapper: Final[ErrorMapper[DeleteWebhookErrorBody]] = _DeleteWebhookError()
