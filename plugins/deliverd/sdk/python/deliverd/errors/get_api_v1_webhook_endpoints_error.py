from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_webhook_endpoints403_error1 import ApiV1WebhookEndpoints403Error1

GetApiV1WebhookEndpointsErrorBody: TypeAlias = ApiV1WebhookEndpoints403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1WebhookEndpointsError:
    def map(self, status_code: int, content: bytes) -> GetApiV1WebhookEndpointsErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1WebhookEndpoints403Error1](content)
            case _:
                return RawError(status_code, content)


get_api_v1_webhook_endpoints_error_mapper: Final[
    ErrorMapper[GetApiV1WebhookEndpointsErrorBody]
] = _GetApiV1WebhookEndpointsError()
