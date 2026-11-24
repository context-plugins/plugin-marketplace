from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

DeleteWebhookSubscriptionErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWebhookSubscriptionError:
    def map(self, status_code: int, content: bytes) -> DeleteWebhookSubscriptionErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


delete_webhook_subscription_error_mapper: Final[
    ErrorMapper[DeleteWebhookSubscriptionErrorBody]
] = _DeleteWebhookSubscriptionError()
