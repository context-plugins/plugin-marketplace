from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WebhooksTestV1WebhooksTestPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WebhooksTestV1WebhooksTestPostError:
    def map(self, status_code: int, content: bytes) -> V1WebhooksTestV1WebhooksTestPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_webhooks_test_v1_webhooks_test_post_error_mapper: Final[
    ErrorMapper[V1WebhooksTestV1WebhooksTestPostErrorBody]
] = _V1WebhooksTestV1WebhooksTestPostError()
