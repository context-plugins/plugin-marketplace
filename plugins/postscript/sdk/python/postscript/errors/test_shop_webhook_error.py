from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_webhooks_test400_error1 import ApiV2WebhooksTest400Error1

TestShopWebhookErrorBody: TypeAlias = ApiV2WebhooksTest400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _TestShopWebhookError:
    def map(self, status_code: int, content: bytes) -> TestShopWebhookErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV2WebhooksTest400Error1](content)
            case _:
                return RawError(status_code, content)


test_shop_webhook_error_mapper: Final[ErrorMapper[TestShopWebhookErrorBody]] = _TestShopWebhookError()
