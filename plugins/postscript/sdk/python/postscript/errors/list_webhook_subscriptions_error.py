from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

ListWebhookSubscriptionsErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _ListWebhookSubscriptionsError:
    def map(self, status_code: int, content: bytes) -> ListWebhookSubscriptionsErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


list_webhook_subscriptions_error_mapper: Final[
    ErrorMapper[ListWebhookSubscriptionsErrorBody]
] = _ListWebhookSubscriptionsError()
