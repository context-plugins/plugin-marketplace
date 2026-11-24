from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.json_error_response import JsonErrorResponse

AddWebhookErrorBody: TypeAlias = JsonErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _AddWebhookError:
    def map(self, status_code: int, content: bytes) -> AddWebhookErrorBody:
        match status_code:
            case 400:
                return decode_json[JsonErrorResponse](content)
            case _:
                return RawError(status_code, content)


add_webhook_error_mapper: Final[ErrorMapper[AddWebhookErrorBody]] = _AddWebhookError()
