from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

TriggerCloudflowWebhookErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _TriggerCloudflowWebhookError:
    def map(self, status_code: int, content: bytes) -> TriggerCloudflowWebhookErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


trigger_cloudflow_webhook_error_mapper: Final[
    ErrorMapper[TriggerCloudflowWebhookErrorBody]
] = _TriggerCloudflowWebhookError()
