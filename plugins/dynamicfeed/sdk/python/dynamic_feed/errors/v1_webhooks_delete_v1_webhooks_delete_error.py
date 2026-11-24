from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WebhooksDeleteV1WebhooksDeleteErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WebhooksDeleteV1WebhooksDeleteError:
    def map(self, status_code: int, content: bytes) -> V1WebhooksDeleteV1WebhooksDeleteErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_webhooks_delete_v1_webhooks_delete_error_mapper: Final[
    ErrorMapper[V1WebhooksDeleteV1WebhooksDeleteErrorBody]
] = _V1WebhooksDeleteV1WebhooksDeleteError()
