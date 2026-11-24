from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

GetWebhookSubscriptionErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _GetWebhookSubscriptionError:
    def map(self, status_code: int, content: bytes) -> GetWebhookSubscriptionErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


get_webhook_subscription_error_mapper: Final[
    ErrorMapper[GetWebhookSubscriptionErrorBody]
] = _GetWebhookSubscriptionError()
