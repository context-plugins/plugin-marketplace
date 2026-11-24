from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_dto import ErrorResponseDto

HandleWebhookInvocationErrorBody: TypeAlias = ErrorResponseDto | str | RawError


@dataclass(frozen=True, slots=True)
class _HandleWebhookInvocationError:
    def map(self, status_code: int, content: bytes) -> HandleWebhookInvocationErrorBody:
        match status_code:
            case 400 | 401 | 404 | 405:
                return decode_json[ErrorResponseDto](content)
            case 429:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


handle_webhook_invocation_error_mapper: Final[
    ErrorMapper[HandleWebhookInvocationErrorBody]
] = _HandleWebhookInvocationError()
