from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_webhook_endpoints_test400_error1 import ApiV1WebhookEndpointsTest400Error1
from ..models.api_v1_webhook_endpoints_test403_error1 import ApiV1WebhookEndpointsTest403Error1
from ..models.api_v1_webhook_endpoints_test404_error1 import ApiV1WebhookEndpointsTest404Error1

PostApiV1WebhookEndpointsByIdTestErrorBody: TypeAlias = (
    ApiV1WebhookEndpointsTest400Error1
    | ApiV1WebhookEndpointsTest403Error1
    | ApiV1WebhookEndpointsTest404Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostApiV1WebhookEndpointsByIdTestError:
    def map(self, status_code: int, content: bytes) -> PostApiV1WebhookEndpointsByIdTestErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1WebhookEndpointsTest400Error1](content)
            case 403:
                return decode_json[ApiV1WebhookEndpointsTest403Error1](content)
            case 404:
                return decode_json[ApiV1WebhookEndpointsTest404Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_webhook_endpoints_by_id_test_error_mapper: Final[
    ErrorMapper[PostApiV1WebhookEndpointsByIdTestErrorBody]
] = _PostApiV1WebhookEndpointsByIdTestError()
