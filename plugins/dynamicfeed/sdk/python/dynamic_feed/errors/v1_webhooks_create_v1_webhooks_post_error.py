from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WebhooksCreateV1WebhooksPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WebhooksCreateV1WebhooksPostError:
    def map(self, status_code: int, content: bytes) -> V1WebhooksCreateV1WebhooksPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_webhooks_create_v1_webhooks_post_error_mapper: Final[
    ErrorMapper[V1WebhooksCreateV1WebhooksPostErrorBody]
] = _V1WebhooksCreateV1WebhooksPostError()
