from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWebhookMessageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWebhookMessageError:
    def map(self, status_code: int, content: bytes) -> GetWebhookMessageErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 503:
                return decode_json[Error](content)
            case 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_webhook_message_error_mapper: Final[ErrorMapper[GetWebhookMessageErrorBody]] = _GetWebhookMessageError()
