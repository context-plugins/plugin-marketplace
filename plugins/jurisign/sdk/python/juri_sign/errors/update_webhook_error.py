from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

UpdateWebhookErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateWebhookError:
    def map(self, status_code: int, content: bytes) -> UpdateWebhookErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


update_webhook_error_mapper: Final[ErrorMapper[UpdateWebhookErrorBody]] = _UpdateWebhookError()
