from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WebhooksListV1WebhooksGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WebhooksListV1WebhooksGetError:
    def map(self, status_code: int, content: bytes) -> V1WebhooksListV1WebhooksGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_webhooks_list_v1_webhooks_get_error_mapper: Final[
    ErrorMapper[V1WebhooksListV1WebhooksGetErrorBody]
] = _V1WebhooksListV1WebhooksGetError()
