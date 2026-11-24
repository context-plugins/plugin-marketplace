from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

BillingWebhookBillingWebhookPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _BillingWebhookBillingWebhookPostError:
    def map(self, status_code: int, content: bytes) -> BillingWebhookBillingWebhookPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


billing_webhook_billing_webhook_post_error_mapper: Final[
    ErrorMapper[BillingWebhookBillingWebhookPostErrorBody]
] = _BillingWebhookBillingWebhookPostError()
