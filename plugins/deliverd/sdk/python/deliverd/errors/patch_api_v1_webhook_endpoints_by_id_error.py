from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_webhook_endpoints400_error1 import ApiV1WebhookEndpoints400Error1
from ..models.api_v1_webhook_endpoints403_error1 import ApiV1WebhookEndpoints403Error1
from ..models.api_v1_webhook_endpoints404_error1 import ApiV1WebhookEndpoints404Error1

PatchApiV1WebhookEndpointsByIdErrorBody: TypeAlias = (
    ApiV1WebhookEndpoints400Error1 | ApiV1WebhookEndpoints403Error1 | ApiV1WebhookEndpoints404Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _PatchApiV1WebhookEndpointsByIdError:
    def map(self, status_code: int, content: bytes) -> PatchApiV1WebhookEndpointsByIdErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1WebhookEndpoints400Error1](content)
            case 403:
                return decode_json[ApiV1WebhookEndpoints403Error1](content)
            case 404:
                return decode_json[ApiV1WebhookEndpoints404Error1](content)
            case _:
                return RawError(status_code, content)


patch_api_v1_webhook_endpoints_by_id_error_mapper: Final[
    ErrorMapper[PatchApiV1WebhookEndpointsByIdErrorBody]
] = _PatchApiV1WebhookEndpointsByIdError()
