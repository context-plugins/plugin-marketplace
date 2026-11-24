from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_webhook_endpoints400_error1 import ApiV1WebhookEndpoints400Error1
from ..models.api_v1_webhook_endpoints403_error1 import ApiV1WebhookEndpoints403Error1

PostApiV1WebhookEndpointsErrorBody: TypeAlias = (
    ApiV1WebhookEndpoints400Error1 | ApiV1WebhookEndpoints403Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _PostApiV1WebhookEndpointsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1WebhookEndpointsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1WebhookEndpoints400Error1](content)
            case 403:
                return decode_json[ApiV1WebhookEndpoints403Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_webhook_endpoints_error_mapper: Final[
    ErrorMapper[PostApiV1WebhookEndpointsErrorBody]
] = _PostApiV1WebhookEndpointsError()
