from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

RegenerateWebhookSecretErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _RegenerateWebhookSecretError:
    def map(self, status_code: int, content: bytes) -> RegenerateWebhookSecretErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


regenerate_webhook_secret_error_mapper: Final[
    ErrorMapper[RegenerateWebhookSecretErrorBody]
] = _RegenerateWebhookSecretError()
